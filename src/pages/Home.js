import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import BasicBox from "../components/style/BasicBox";
import CheckForm from "../components/home/CheckForm";
import Clock from "../components/home/Clock";
import Weather from "../components/home/Weather";
import BasicButton from "../components/style/BasicButton";

import { todoActions } from "../store/todoList";

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

const TodoList = styled.div`
  padding-right: 5%;
  border-right: 1px solid #e7ecef;

  .check-box {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    border-right: none;
    border-bottom: 1px solid #e7ecef;

    padding-right: 0;
  }
`;

const Add = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid #6c757d;

    padding: 10px 5px;

    margin-right: 10px;

    &:focus,
    &:active {
      border: none;
      outline: none;
      border-bottom: 1px solid #6c757d;
    }
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

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;

  .progress-text {
    display: flex;
    justify-content: space-between;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 20px;

  margin: 10px 0;
  border-radius: 10px;

  background-color: #e9ecef;

  .progress-bar {
    width: ${(props) => props.width};
    height: 100%;

    background-color: #6096ba;
    border-radius: 10px;

    transition: width 1s;
  }
`;

const Home = () => {
  //투두리스트
  const [todo, setTodo] = useState("");
  const [totalTodo, setTotalTodo] = useState();
  const [completeTodo, setCompleteTodo] = useState();
  const [todoProgress, setTodoProgress] = useState();

  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const checkedTodo = todoList.filter((item) => item.checked === true);

  const submitHandler = () => {
    if (todo.length > 0) {
      dispatch(
        todoActions.todoCreate({
          id: Math.random(),
          checked: false,
          todo,
        })
      );
      setTodo("");
    }
  };

  //Progress Bar 계산
  useEffect(() => {
    if (checkedTodo.length) {
      setTotalTodo(todoList.length);
      setCompleteTodo(checkedTodo.length);
      setTodoProgress(
        String(Math.floor((parseInt(completeTodo) / parseInt(totalTodo)) * 100))
      );
    } else {
      setTodoProgress(0);
    }
  }, [checkedTodo]);

  return (
    <Fragment>
      <BasicBox
        boxTitle={"Welcome back, Oneill!"}
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
            <TodoList>
              <Add>
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <BasicButton name="Add a Todo" onClick={submitHandler} />
              </Add>
              <div className="check-box">
                {todoList.map((item) => (
                  <CheckForm key={item.id} {...item} />
                ))}
              </div>
              <ProgressBox>
                <div className="progress-text">
                  <span>Goals</span>
                  <span>{todoProgress}%</span>
                </div>
                <Progress width={`${todoProgress}%`}>
                  <div className="progress-bar"></div>
                </Progress>
              </ProgressBox>
            </TodoList>
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
