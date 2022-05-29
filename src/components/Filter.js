import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 0.3fr 0.3fr auto;
  grid-gap: 20px;

  select {
    outline: none;
    border: none;
    background-color: #e9ecef;
    border-radius: 5px;

    padding-left: 5px;

    font-family: "Ubuntu", sans-serif;
  }

  button {
    width: 100%;
  }
`;

const Filter = ({ btnName, category1, category2, path }) => {
  return (
    <StyledHeader>
      <select className="order">
        <option>Latest</option>
        <option>Oldest</option>
      </select>
      <select className="category">
        <option>{category1}</option>
        <option>{category2}</option>
        <option>All</option>
      </select>
      <Link to={path}>
        <Button name={btnName} mainColor={"#6096BA"} textColor={"white"} />
      </Link>
    </StyledHeader>
  );
};

export default Filter;
