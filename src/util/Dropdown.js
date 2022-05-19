import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCaretDown, FaUserCircle, FaBell, FaPowerOff } from "react-icons/fa";

import "./../App.css";

const Dropdown = () => {
  const dropdownRef = useRef(); //Dropdown의 class 변경시키기 위해 ref 속성 부여
  const [isActive, setIsActive] = useState(false);
  const activeHandler = () => setIsActive(!isActive);

  const navigate = useNavigate();

  return (
    <div className="Dropdown">
      <button onClick={activeHandler}>
        <img src={process.env.PUBLIC_URL + "1.png"} alt="profile-pic" />
        <span>Oneill</span>
        <FaCaretDown />
      </button>
      <nav ref={dropdownRef} className={isActive ? "active" : "inactive"}>
        <ul>
          <li>
            <FaUserCircle />
            <span onClick={() => navigate("/myaccount")}>My Account</span>
          </li>
          <li>
            <FaBell />
            <span>Notifications</span>
          </li>
          <hr />
          <li>
            <FaPowerOff />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
