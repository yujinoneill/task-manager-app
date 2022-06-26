import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { useAppSelector } from "../../store/hook";

import { todoActions } from "../../store/todoList";
import BasicButton from "../style/BasicButton";
import CheckForm from "./CheckForm";

//Styled-components
const StyledDiv = styled.div`
  padding-right: 5%;
  border-right: 1px solid #e7ecef;

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

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;

  .progress-text {
    display: flex;
    justify-content: space-between;
  }
`;

const Progress = styled.div<{ width: string }>`
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

//Types
type TodoProgress = { todoProgress: string };

//Components
const AddForm = React.memo(() => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  //투두리스트 추가
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

  return (
    <Add>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <BasicButton name="Add a Todo" onClick={submitHandler} />
    </Add>
  );
});

const ProgressBar: React.FC<TodoProgress> = React.memo(({ todoProgress }) => {
  return (
    <ProgressBox>
      <div className="progress-text">
        <span>Goals</span>
        <span>{todoProgress}%</span>
      </div>
      <Progress width={`${todoProgress}%`}>
        <div className="progress-bar"></div>
      </Progress>
    </ProgressBox>
  );
});

const TodoList = () => {
  //Progress Bar 계산
  const [totalTodo, setTotalTodo] = useState<number>(0);
  const [completeTodo, setCompleteTodo] = useState<number>(0);
  const [todoProgress, setTodoProgress] = useState<string>("");

  const todoList = useAppSelector((state) => state.todo);

  const checkedTodo: (string | number)[] = todoList.filter(
    (item) => item.checked === true
  );

  useEffect(() => {
    if (checkedTodo.length) {
      setTotalTodo(todoList.length);
      setCompleteTodo(checkedTodo.length);
      setTodoProgress(String(Math.floor((completeTodo / totalTodo) * 100)));
    } else {
      setTodoProgress("0");
    }
  }, [checkedTodo]);

  return (
    <StyledDiv>
      <AddForm />
      {todoList.map((item) => (
        <CheckForm key={item.id} {...item} />
      ))}
      <ProgressBar todoProgress={todoProgress} />
    </StyledDiv>
  );
};

export default React.memo(TodoList);
