import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";

import { todoActions } from "../../store/todoList";

const Check = styled.div<{ checked: boolean }>`
  margin: 10px 0;

  display: flex;
  align-items: center;

  label {
    cursor: pointer;
  }

  input,
  span {
    margin-right: 10px;
  }

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;

    cursor: pointer;
  }

  ${(props) =>
    props.checked === true &&
    css`
      span {
        text-decoration: line-through;
        color: gray;
      }
    `}
`;

const CheckForm = ({ id, todo, checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      todoActions.todoEdit({
        id,
        checked: isChecked,
        todo,
      })
    );
  }, [isChecked]);

  const removeHandler = () => {
    dispatch(todoActions.todoRemove(id));
  };

  return (
    <Check checked={isChecked}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span>{todo}</span>
      </label>
      <button onClick={removeHandler}>
        <FaTimes />
      </button>
    </Check>
  );
};

export default React.memo(CheckForm);
