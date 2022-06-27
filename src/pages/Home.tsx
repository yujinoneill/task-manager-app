import React, { Fragment } from "react";
import styled from "styled-components";

import BasicBox from "../components/style/BasicBox";
import Clock from "../components/home/Clock";
import Weather from "../components/home/Weather";
import TodoList from "../components/home/Todolist";
import { useAppSelector } from "../store/hook";

//Styled-components
const WelcomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  p {
    margin-right: 20px;
  }

  img {
    height: 140px;
    margin: auto;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    p {
      margin-right: 0;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 0.6fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;

  margin: 10px 0;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Widget = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  place-items: center;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

//Component
const Home = () => {
  //WelcomBox에 유저 이름 불러오기
  const user = useAppSelector((state) => state.user);
  const userName = user.name;

  return (
    <Fragment>
      <BasicBox
        boxTitle={`Welcome, ${userName}!`}
        boxContent={
          <WelcomeContent>
            <p>
              Your tasks are waiting for you. Check your things and Manage your
              time more effectively.
            </p>
            <img
              src={process.env.PUBLIC_URL + "/assets/undraw_task_list_6x9d.svg"}
              alt="welcome-img"
            />
          </WelcomeContent>
        }
      />
      <BasicBox
        boxTitle={"Wonderful Day"}
        boxContent={
          <Container>
            <TodoList />
            <Widget>
              <Weather />
              <Clock />
            </Widget>
          </Container>
        }
      />
    </Fragment>
  );
};

export default Home;
