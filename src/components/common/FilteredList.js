import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WishBox from "../wishlist/WishBox";
import Button from "../style/Button";
import DiaryBox from "../diary/DiaryBox";
import Modal from "./Modal";
import WishEditor from "../wishlist/WishEditor";

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

  box-sizing: border-box;

  margin: 10px 0;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) => props.type === "diary" && "1fr"};
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDiv = styled.div`
  padding-top: 20px;
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  //data sorting function
  const processedList = () => {
    const datefilter = (a, b) => {
      if (sortType === "Latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const typeFilter = (item) => {
      if (type === "diary") {
        if (categoryType === "Study") {
          return item.category === "Study";
        } else {
          return item.category === "Daily";
        }
      } else {
        if (wishType === "Wish") {
          return item.icon === "Wish";
        } else {
          return item.icon === "Purchased";
        }
      }
    };

    const copyList = JSON.parse(JSON.stringify(list));

    const categoryFilteredList =
      categoryType === "All"
        ? copyList
        : copyList.filter((item) => typeFilter(item));

    const wishFilteredList =
      wishType === "All"
        ? copyList
        : copyList.filter((item) => typeFilter(item));

    const sortedList =
      type === "diary"
        ? categoryFilteredList.sort(datefilter)
        : wishFilteredList.sort(datefilter);

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
        <Link to={type === "diary" && "/new-diary"}>
          <Button
            name={type === "diary" ? "Post a New Diary" : "Add a New Wish"}
            color={"#6096ba"}
            onClick={type === "wish" ? modalHandler : null}
          />
        </Link>
      </StyledHeader>
      <Grid type={type}>
        {type === "diary"
          ? processedList().map((item) => <DiaryBox key={item.id} {...item} />)
          : processedList().map((item) => (
              <WishBox key={item.id} {...item} modalHandler={modalHandler} />
            ))}
      </Grid>
      {isModalVisible && (
        <Modal
          modalHandler={modalHandler}
          children={<WishEditor modalHandler={modalHandler} />}
        />
      )}
    </StyledDiv>
  );
};

export default FilteredList;
