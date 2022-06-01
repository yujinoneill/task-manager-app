import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
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
  );
}

export default App;
