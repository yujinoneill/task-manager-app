import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WishBox from "../wishlist/WishBox";
import BlueButton from "../style/BlueButton";
import DiaryBox from "../diary/DiaryBox";
import Modal from "./Modal";
import WishEditor from "../wishlist/WishEditor";
import {
  ControlProps,
  DiaryProps,
  FilterProps,
  WishListProps,
} from "../../util/interface";

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

const Grid = styled.div<{ type: FilterProps["type"] }>`
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
const ControlFilter = React.memo(
  ({ value, onChange, optionList }: ControlProps) => {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
);

const FilteredList = ({ type, list }: FilterProps) => {
  const [sortType, setSortType] = useState("Latest");
  const [emotionType, setEmotionType] = useState("All");
  const [wishType, setWishType] = useState("All");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalHandler = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  //Data sorting function
  const processedList = () => {
    const dateFilter = (
      a: DiaryProps | WishListProps,
      b: DiaryProps | WishListProps
    ) => {
      if (sortType === "Latest") {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    };

    const emotionFilter = (item: DiaryProps) => {
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
    };

    const wishFilter = (item: WishListProps) => {
      if (wishType === "Wish") {
        return item.icon === "Wish";
      } else {
        return item.icon === "Purchased";
      }
    };

    const copyList = JSON.parse(JSON.stringify(list));

    const emotionFilteredList =
      emotionType === "All"
        ? copyList
        : copyList.filter((item: DiaryProps) => emotionFilter(item));

    const wishFilteredList =
      wishType === "All"
        ? copyList
        : copyList.filter((item: WishListProps) => wishFilter(item));

    const sortedList =
      type === "diary"
        ? emotionFilteredList.sort(dateFilter)
        : wishFilteredList.sort(dateFilter);

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
        {type === "diary" ? (
          <Link to="/new-diary">
            <BlueButton name="Post a New Diary" />
          </Link>
        ) : (
          <BlueButton name="Add a New Wish" onClick={modalHandler} />
        )}
      </StyledHeader>
      <Grid type={type}>
        {type === "diary"
          ? processedList().map((item: DiaryProps) => (
              <DiaryBox key={item.id} {...item} />
            ))
          : processedList().map((item: WishListProps) => (
              <WishBox key={item.id} {...item} />
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

export default React.memo(FilteredList);
