import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from './components/common/Calendar';
import Footer from './components/common/Footer';
import MainHeader from './components/common/MainHeader';
import Title from './components/common/Title';
import Main from "./pages/Main";
import Diary from "./pages/Diary";
import getUserData from './lib/api';


const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth} />
        <Title />
        <Switch>
          <Route exact path="/" cmponent={() => <Main year={year} month={month} />} />
          <Route exact path="/diary" cmponent={Diary} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>page not found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;