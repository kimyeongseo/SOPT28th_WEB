import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from './components/common/Calendar';
import Footer from './components/common/Footer';
import MainHeader from './components/common/MainHeader';
import Title from './components/common/Title';
import Main from "./pages/Main";
import Diary from "./pages/Diary";
import { getCardData } from './lib/api';



const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return { year: currentYear, month: currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().year);
  const [month, setMonth] = useState(getCurrentDate().month);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currentYear={year}
          setCurrentYear={setYear}
          currentMonth={month}
          setCurrentMonth={setMonth} />
        <Title />
        <Switch>
          <Route exact path="/" component={() => { return <Main props={userData} /> }} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>page not found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;