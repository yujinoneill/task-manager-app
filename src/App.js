import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import styled from "styled-components";

import "./App.css";
import { diaryActions } from "./store/diary";

// components
import Header from "./components/Header";
import SideBar from "./components/SideBar";

// pages
import Home from "./pages/Home";
import Diary from "./pages/diary/Diary";
import NewDiary from "./pages/diary/NewDiary";
import EditDiary from "./pages/diary/EditDiary";
import MyAccount from "./pages/MyAccount";
import WishList from "./pages/wishlist/WishList";
import { wishActions } from "./store/wishList";

// styled-components
const StyledApp = styled.div`
  padding: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 50px;
`;

//Function & Data
export const DiaryDispatchContext = React.createContext();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("data");

    // && localData.length > 21

    if (localData) {
      const localDiaryList = JSON.parse(localData).diary; //localData 직렬화
      dispatch(diaryActions.diaryInit(localDiaryList));

      const localWishList = JSON.parse(localData).wish;
      dispatch(wishActions.wishInit(localWishList));
    }
  }, []);

  return (
    <BrowserRouter>
      <SideBar />
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/new-diary" element={<NewDiary />} />
          <Route path="/edit-diary/:id" element={<EditDiary />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
