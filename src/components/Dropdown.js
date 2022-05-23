import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCaretDown, FaUserCircle, FaBell, FaPowerOff } from "react-icons/fa";
import styled, { css } from "styled-components";

// Styled-components
const StyledDropdown = styled.div`
  position: relative;

  button {
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;

    font-size: 18px;
    font-family: "Ubuntu", sans-serif;

    cursor: pointer;

    span {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  img {
    width: 30px;
  }
`;

const Nav = styled.nav`
  background-color: white;
  display: none;

  position: absolute;
  top: 40px;
  right: 0;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);

  min-width: 190px;

  ${(props) =>
    props.active === "active" &&
    css`
      display: block;
    `}
`;

export const List = styled.ul`
  margin: 0;
  padding: 20px;

  li {
    list-style-type: none;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;

    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }
`;

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const activeHandler = () => setIsActive(!isActive);

  const navigate = useNavigate();

  return (
    <StyledDropdown>
      <button onClick={activeHandler}>
        <img src={process.env.PUBLIC_URL + "/assets/1.png"} alt="profile-pic" />
        <span>Oneill</span>
        <FaCaretDown />
      </button>
      <Nav active={isActive ? "active" : "inactive"}>
        <List>
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
        </List>
      </Nav>
    </StyledDropdown>
  );
};

export default Dropdown;
