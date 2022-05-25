import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  FaHome,
  FaCloudDownloadAlt,
  FaBook,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

import { List } from "./Dropdown";

// styled-components
const StyledSideBar = styled.div`
  width: 240px;
  height: 100%;
  background-color: white;
  padding: 20px;

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

const StyledList = styled(List)`
  padding: 10px 20px;
  font-size: 18px;

  li {
    padding-top: 10px;
    padding-bottom: 10px;

    a {
      text-decoration: none;
      color: #274c77;

      display: flex;
      align-items: center;

      &:focus {
        color: #6096ba;
      }
    }
  }
`;

const SideBar = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const sidebarToggler = () => setIsVisible(!isVisible);

  return (
    <div>
      <StyledSideBar active={`${isVisible ? "active" : "inactive"}`}>
        <h4>Task Manager</h4>
        <Button onClick={sidebarToggler}>
          <FaTimes />
        </Button>
        <StyledList>
          <li>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/data">
              <FaCloudDownloadAlt />
              <span>Data Storage</span>
            </Link>
          </li>
          <li>
            <Link to="/diary">
              <FaBook />
              <span>Diary</span>
            </Link>
          </li>
          <li>
            <Link to="/myaccount">
              <FaUserCircle />
              <span>My Account</span>
            </Link>
          </li>
        </StyledList>
      </StyledSideBar>
    </div>
  );
};

export default SideBar;
