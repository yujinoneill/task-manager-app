import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import DataStorage from "./pages/DataStorage";
import Diary from "./pages/Diary";
import MyAccount from "./pages/MyAccount";

import SideBar from "./components/SideBar";

// styled-components
const StyledApp = styled.div`
  padding: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 70px;
`;

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataStorage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
