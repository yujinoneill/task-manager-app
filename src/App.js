import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import "./App.css";

// components
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";

// pages
import Home from "./pages/Home";
import Diary from "./pages/diary/Diary";
import NewDiary from "./pages/diary/NewDiary";
import EditDiary from "./pages/diary/EditDiary";
import Developer from "./pages/Developer";
import WishList from "./pages/wishlist/WishList";
import Login from "./pages/Login";

// styled-components
const StyledApp = styled.div`
  padding: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 50px;
`;

//함수 전달 위해 context 생성
export const LogInOutContext = React.createContext();

function App() {
  const user = useSelector((state) => state.user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인 여부 확인
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setIsLoggedIn(true);
    }
  }, []);

  //로그인 관리 함수
  const loginToggler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LogInOutContext.Provider value={{ loginToggler }}>
      <BrowserRouter>
        <SideBar />
        <StyledApp>
          <Header />
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/new-diary" element={<NewDiary />} />
              <Route path="/edit-diary/:id" element={<EditDiary />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </StyledApp>
      </BrowserRouter>
    </LogInOutContext.Provider>
  );
}

export default App;
