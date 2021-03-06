import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaBook, FaShoppingCart, FaBars } from "react-icons/fa";
import { GiSnail } from "react-icons/gi";

import { List } from "../style/Dropdown";
import { SideBarProps } from "../../util/interface";
import { Background } from "../../pages/Login";

//Styled-components
const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;

  overflow-x: hidden;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  padding-left: 10px;

  font-size: 18px;

  cursor: pointer;
`;

const StyledSideBar = styled.div<{ active: SideBarProps["active"] }>`
  width: ${(props) => (props.active === "active" ? "190px" : "50px")};
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

  h4 {
    font-size: 20px;
    margin: 0;
    padding-left: 10px;
    color: #6096ba;

    display: inline-block;
  }
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

const SideBarOverlay = styled(Background)<{ active: SideBarProps["active"] }>`
  display: ${(props) => (props.active === "active" ? "block" : "none")};

  z-index: 0;

  background-color: transparent;
`;

//Components
const SideHeader = ({ sidebarHandler }: SideBarProps) => {
  return (
    <StyledHeader>
      <Button onClick={sidebarHandler}>
        <FaBars />
      </Button>
      <h4>Task Manager</h4>
    </StyledHeader>
  );
};

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sidebarHandler = () => setIsVisible(!isVisible);

  return (
    <Fragment>
      <StyledSideBar active={`${isVisible && "active"}`}>
        <SideHeader sidebarHandler={sidebarHandler} />
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
            <Link to="/developer">
              <GiSnail />
              <span>Developer</span>
            </Link>
          </li>
        </StyledList>
      </StyledSideBar>
      <SideBarOverlay
        active={`${isVisible && "active"}`}
        onClick={sidebarHandler}
      />
    </Fragment>
  );
};

export default SideBar;
