import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  FaHome,
  FaBook,
  FaShoppingCart,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

import { List } from "../style/Dropdown";

// styled-components
const StyledSideBar = styled.div`
  width: 50px;
  height: 100%;
  background-color: white;
  padding: 10px 10px 0 5px;

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
      width: 190px;
    `}

  h4 {
    font-size: 20px;
    margin: 0;
    padding-left: 10px;
    color: #6096ba;

    display: inline-block;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  padding-left: 10px;

  font-size: 18px;

  cursor: pointer;
`;

const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;

  overflow-x: hidden;
`;

const StyledList = styled(List)`
  padding: 10px 10px;
  font-size: 18px;

  overflow-x: hidden;

  li {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sidebarToggler = () => setIsVisible(!isVisible);

  return (
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
          <Link to="/diary">
            <FaBook />
            <span>Diary</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <FaShoppingCart />
            <span>Wish List</span>
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
  );
};

export default SideBar;
