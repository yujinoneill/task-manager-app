import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import DataStorage from "./pages/DataStorage";
import Diary from "./pages/Diary";
import MyAccount from "./pages/MyAccount";

//css
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataStorage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
