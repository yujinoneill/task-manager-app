import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef } from "react";

import "./App.css";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Diary from "./pages/diary/Diary";
import NewDiary from "./pages/diary/NewDiary";
import EditDiary from "./pages/diary/EditDiary";
import MyAccount from "./pages/MyAccount";
import WishList from "./pages/wishlist/WishList";
import NewWish from "./pages/wishlist/NewWish";
import EditWish from "./pages/wishlist/EditWish";

import SideBar from "./components/SideBar";

// styled-components
const StyledApp = styled.div`
  padding: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 50px;
`;

//Function & Data
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const diaryReducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.data.id ? [...action.data] : item
      );
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    default: {
      return state;
    }
  }

  // localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

function App() {
  const [data, dispatch] = useReducer(diaryReducer, []);

  const dataId = useRef(0);

  //Create
  const onCreate = (title, content, category) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date().getTime(),
        title,
        content,
        category,
      },
    });
    dataId.current += 1;
  };

  //Edit
  const onEdit = (targetId, date, title, content, category) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content,
        category,
      },
    });
  };

  //Remove
  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <SideBar />
          <StyledApp>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/new-diary" element={<NewDiary />} />
              <Route path="/edit-diary" element={<EditDiary />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/new-wish" element={<NewWish />} />
              <Route path="/edit-wish" element={<EditWish />} />
              <Route path="/myaccount" element={<MyAccount />} />
            </Routes>
          </StyledApp>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
