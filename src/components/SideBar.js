import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  FaHome,
  FaCloudDownloadAlt,
  FaBook,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

// styled-components
const StyledSideBar = styled.div`
  width: 240px;
  height: 100%;
  background-color: white;
  padding: 10px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  overflow-x: hidden;
  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;
  transition: 0.5s;

  ${(props) =>
    props.active === "inactive" &&
    css`
      width: 0;
      padding: 0;
    `}

  h4 {
    font-size: 24px;
    margin: 10px;
    color: #6096ba;
  }

  @media screen and (max-width: 768px) {
    width: 0;
    padding: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  position: absolute;
  top: 28px;
  right: 20px;

  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 20px;

  li {
    list-style-type: none;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;

    font-size: 18px;
    color: #274c77;

    span {
      margin-left: 10px;
    }
  }
`;

const SideBar = (props) => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);

  const sidebarToggler = () => setIsVisible(!isVisible);

  return (
    <div>
      <StyledSideBar active={`${isVisible ? "active" : "inactive"}`}>
        <h4>Task Manager</h4>
        <Button onClick={sidebarToggler}>
          <FaTimes />
        </Button>
        <List>
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
        </List>
      </StyledSideBar>
    </div>
  );
};

export default SideBar;
