import { FaSearch } from "react-icons/fa";
import Dropdown from "../util/Dropdown";

import "./../App.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="head-search">
        <FaSearch />
        <input type="search" placeholder="Search" />
      </div>
      <div className="head-profile">
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
