import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

//Styled-components
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

//Data
const sortOptionList = [
  { value: "Latest", name: "Latest" },
  { value: "Oldest", name: "Oldest" },
];

const categoryOptionList = [
  { value: "Study", name: "Study" },
  { value: "Daily", name: "Daily" },
  { value: "All", name: "All" },
];

const wishOptionList = [
  { value: "Wish", name: "Wish" },
  { value: "Purchased", name: "Purchased" },
  { value: "All", name: "All" },
];

//Components
const ControllFilter = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const Filter = ({ btnName, type, path }) => {
  const [sortType, setSortType] = useState("Latest");
  const [categoryTYpe, setCategoryType] = useState("All");
  const [wishType, setWishType] = useState("All");

  return (
    <StyledHeader>
      <ControllFilter
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {type === "diary" ? (
        <ControllFilter
          value={categoryTYpe}
          onChange={setCategoryType}
          optionList={categoryOptionList}
        />
      ) : (
        <ControllFilter
          value={wishType}
          onChange={setWishType}
          optionList={wishOptionList}
        />
      )}
      <Link to={path}>
        <Button name={btnName} mainColor={"#6096BA"} textColor={"white"} />
      </Link>
    </StyledHeader>
  );
};

export default Filter;
