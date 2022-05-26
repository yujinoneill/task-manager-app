import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  FaHome,
  FaCloudDownloadAlt,
  FaBook,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

import { List } from "./Dropdown";

// styled-components
const StyledSideBar = styled.div`
  width: 70px;
  height: 100%;
  background-color: white;
  padding: 10px 20px 0 5px;

  white-space: nowrap;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;
  transition: 0.5s;

  ${(props) =>
    props.active === "active" &&
    css`
      width: 230px;
    `}

  h4 {
    font-size: 22px;
    margin: 0;
    padding-left: 20px;
    color: #6096ba;

    display: inline-block;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  padding-left: 20px;
  font-size: 18px;

  cursor: pointer;
`;

const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;

  overflow-x: hidden;
`;

const StyledList = styled(List)`
  padding: 10px 20px;
  font-size: 18px;

  overflow-x: hidden;

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

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sidebarToggler = () => setIsVisible(!isVisible);

  return (
    <div>
      <StyledSideBar active={`${isVisible ? "active" : "inactive"}`}>
        <StyledHeader>
          <Button onClick={sidebarToggler}>
            <FaBars />
          </Button>
          <h4>Task Manager</h4>
        </StyledHeader>
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
