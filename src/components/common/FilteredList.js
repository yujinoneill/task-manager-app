import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WishBox from "../wishlist/WishBox";
import BlueButton from "../style/BlueButton";
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

const emotionOptionList = [
  { value: "Perfect", name: "Perfect" },
  { value: "Happy", name: "Happy" },
  { value: "Soso", name: "Soso" },
  { value: "Unhappy", name: "Unhappy" },
  { value: "Sad", name: "Sad" },
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
  const [emotionType, setEmotionType] = useState("All");
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
        if (emotionType === "Perfect") {
          return item.emotion === 1;
        } else if (emotionType === "Happy") {
          return item.emotion === 2;
        } else if (emotionType === "Soso") {
          return item.emotion === 3;
        } else if (emotionType === "Unhappy") {
          return item.emotion === 4;
        } else {
          return item.emotion === 5;
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

    const emotionFilteredList =
      emotionType === "All"
        ? copyList
        : copyList.filter((item) => typeFilter(item));

    const wishFilteredList =
      wishType === "All"
        ? copyList
        : copyList.filter((item) => typeFilter(item));

    const sortedList =
      type === "diary"
        ? emotionFilteredList.sort(datefilter)
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
            value={emotionType}
            onChange={setEmotionType}
            optionList={emotionOptionList}
          />
        ) : (
          <ControlFilter
            value={wishType}
            onChange={setWishType}
            optionList={wishOptionList}
          />
        )}
        <Link to={type === "diary" && "/new-diary"}>
          <BlueButton
            name={type === "diary" ? "Post a New Diary" : "Add a New Wish"}
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
