import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { LogInOutContext } from "../App";
import { userActions } from "../store/user";

const Background = styled.div`
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;

  background-color: #e7ecef;

  outline: 0;
`;

const LoginBox = styled.div`
  box-sizing: border-box;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgb(0, 0, 0, 0.15);

  width: 40%;
  min-width: 300px;
  max-height: 80%;

  position: relative;

  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: #274c77;
  font-family: "Ubuntu", sans-serif;

  h2 {
    color: #6096ba;
    margin: 0;
  }

  img {
    width: 90%;
    margin: 20px 0;
  }

  input {
    border: none;
    outline: none;

    padding: 10px;
    border-radius: 5px;

    font-size: 16px;
    text-align: center;

    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }

  @media screen and (max-width: 992px) {
    width: 60%;
  }

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

const Login = () => {
  const { loginToggler } = useContext(LogInOutContext);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(
        userActions.userLogin({
          name: userName,
        })
      );
      loginToggler();
      navigate("/", { replace: true });
    }
  };

  return (
    <Background>
      <LoginBox>
        <h2>My Little Task Manager</h2>
        <p>Manage your day with To-do lists, Diarys, and Wish lists! </p>
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/undraw_voice_interface_re_206s.svg"
          }
          alt="welcome-img"
        />
        <input
          type="text"
          placeholder="What's Your Name?"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyPress={loginHandler}
        />
      </LoginBox>
    </Background>
  );
};

export default Login;
