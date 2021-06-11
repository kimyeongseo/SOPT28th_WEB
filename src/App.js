import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from './components/common/Calendar';
import Footer from './components/common/Footer';
import MainHeader from './components/common/MainHeader';
import Title from './components/common/Title';
import Main from "./pages/Main";
import Diary from "./pages/Diary";



const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return { year: currentYear, month: currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().year);
  const [month, setMonth] = useState(getCurrentDate().month);

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
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/edit/:id"
            component={() => <Diary year={year} month={month} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;