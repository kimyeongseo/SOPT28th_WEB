import React from 'react';
import Result from "./components/Result";
import SearchBar from './components/SearchBar';
import { getUserData } from './lib/api';
import Styled from "styled-components";

const MainWrap = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background: rgb(183,209,247);
background: radial-gradient(circle, rgba(183,209,247,1) 8%, rgba(163,166,251,1) 100%);
`;

function App() {
  const [userData, setUserData] = React.useState({
    status: 'idle',
    data: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch (e) {
      setUserData({ status: "rejected", data: null });
      console.log(e);
    }
  };

  return (
    <MainWrap>
      <SearchBar getUser={getUser} />
      <Result userData={userData} />
    </MainWrap>
  );
}

export default App;
