import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledDiv } from "./wishlist/WishBox";
import Button from "./Button";
import DiaryBox from "./diary/DiaryBox";

//Styled-components
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 0.3fr 0.3fr auto;
  grid-gap: 20px;

  margin-bottom: 20px;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;

  margin: 10px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
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
const ControlFilter = ({ value, onChange, optionList }) => {
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

const FilteredList = ({ type, list }) => {
  const [sortType, setSortType] = useState("Latest");
  const [categoryType, setCategoryType] = useState("All");
  const [wishType, setWishType] = useState("All");

  const processedList = () => {
    const datefilter = (a, b) => {
      if (sortType === "Latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const categoryFilter = (item) => {
      if (categoryType === "Study") {
        return item.category === "Study";
      } else {
        return item.category === "Daily";
      }
    };

    // const wishFilter = (item) => {
    //   if (wishType === "Study") {
    //     return item.wish === "Study";
    //   } else {
    //     return item.wish === "Daily";
    //   }
    // };

    const copyList = JSON.parse(JSON.stringify(list));

    const categoryFilteredList =
      categoryType === "All"
        ? copyList
        : copyList.filter((item) => categoryFilter(item));

    const sortedList = categoryFilteredList.sort(datefilter);
    return sortedList;
  };

  return (
    <StyledDiv>
      <StyledHeader>
        <ControlFilter
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        {type === "diary" ? (
          <ControlFilter
            value={categoryType}
            onChange={setCategoryType}
            optionList={categoryOptionList}
          />
        ) : (
          <ControlFilter
            value={wishType}
            onChange={setWishType}
            optionList={wishOptionList}
          />
        )}
        <Link to={type === "diary" ? "/new-diary" : "/new-wish"}>
          <Button
            name={type === "diary" ? "Post a New Diary" : "Add a New Wish"}
            color={"#6096ba"}
          />
        </Link>
      </StyledHeader>
      <Grid>
        {processedList().map((item) =>
          type === "diary" ? (
            <DiaryBox key={item.id} {...item} />
          ) : (
            <div key={item.date}></div>
          )
        )}
      </Grid>
    </StyledDiv>
  );
};

export default FilteredList;
