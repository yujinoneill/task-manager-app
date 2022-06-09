import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { diaryActions } from "./store/diary";

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
        item.id === action.data.id ? action.data : item
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

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

function App() {
  const dispatch = useDispatch();
  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    // const localData = localStorage.length ? localStorage.getItem("diary") : {};

    //if(localData.length > 2)
    if (localData && localData.length > 2) {
      const localDiaryList = JSON.parse(localData); //localData 직렬화
      const diaryListLastData = localDiaryList.sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      ); // 내림차순으로 정렬
      dataId.current = parseInt(diaryListLastData[0].id) + 1; //단순히 diaryList의 길이를 기준으로 current값을 변경하면 삭제된 다이어리가 있을 때 id가 겹칠 수 있음

      dispatch({ type: "INIT", data: localDiaryList });
    }
  }, []);

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
          <Route path="/new-wish" element={<NewWish />} />
          <Route path="/edit-wish" element={<EditWish />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
