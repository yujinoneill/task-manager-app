import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaCaretDown, FaUserCircle, FaPowerOff } from "react-icons/fa";

import { userActions } from "../../store/user";
import { LogInOutContext } from "../../App";
import { useAppSelector } from "../../store/hook";
import { LoginTogglerType } from "../../util/interface";

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

    color: #274c77;

    cursor: pointer;

    span {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

const Nav = styled.nav`
  background-color: white;

  position: absolute;
  top: 40px;
  right: 0;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);

  min-width: 190px;
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

    a {
      text-decoration: none;
      color: #274c77;

      display: flex;
      align-items: center;

      &:focus,
      &:hover {
        color: #6096ba;
      }
    }
  }
`;

//Component
const Dropdown = () => {
  const { loginToggler } = useContext(LogInOutContext) as LoginTogglerType;

  const user = useAppSelector((state) => state.user);
  const userName = user.name;
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeHandler = () => setIsActive(!isActive);

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to Log Out?")) {
      dispatch(userActions.userLogout({})); //로그아웃시켜서 user 데이터 제거
      loginToggler(); //App.js의 isLoggedIn 변경해서 Login 페이지로 이동
      activeHandler(); //isActive false로 변경시켜서 드롭다운 닫기
      navigate("/", { replace: true });
    }
  };

  return (
    <StyledDropdown>
      <button onClick={activeHandler}>
        <FaUserCircle />
        <span>{userName}</span>
        <FaCaretDown />
      </button>
      {isActive ? (
        <Nav>
          <List>
            <li>
              <FaPowerOff />
              <span onClick={logoutHandler}>Logout</span>
            </li>
          </List>
        </Nav>
      ) : null}
    </StyledDropdown>
  );
};

export default Dropdown;
