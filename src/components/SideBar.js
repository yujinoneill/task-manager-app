import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaCloudDownloadAlt,
  FaBook,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

import "./../App.css";

const SideBar = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);

  const sidebarToggler = () => setIsVisible(!isVisible);

  return (
    <div
      className={["SideBar", `${isVisible ? "active" : "inactive"}`].join(" ")}
    >
      <h4>Task Manager</h4>
      <button className="sidebar-btn" onClick={sidebarToggler}>
        <FaTimes />
      </button>
      <ul>
        <li onClick={() => navigate("/")}>
          <FaHome />
          <span>Home</span>
        </li>
        <li onClick={() => navigate("/data")}>
          <FaCloudDownloadAlt />
          <span>Data Storage</span>
        </li>
        <li onClick={() => navigate("/diary")}>
          <FaBook />
          <span>Diary</span>
        </li>
        <li onClick={() => navigate("/myaccount")}>
          <FaUserCircle />
          <span>My Account</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
