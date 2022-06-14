import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoList";
import { useEffect, useState } from "react";

const Check = styled.div`
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

  span {
    text-decoration: ${(props) => props.checked === true && "line-through"};
    color: ${(props) => props.checked === true && "gray"};
  }
`;

const CheckForm = ({ id, todo, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
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

export default CheckForm;
