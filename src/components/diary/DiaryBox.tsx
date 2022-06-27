import React, { useState, Fragment } from "react";
import styled from "styled-components";

import { EmotionIcon } from "./EmotionIcon";
import Modal from "../common/Modal";
import DiaryDetail from "./DiaryDetail";
import { getStringDate } from "../../util/date";
import { DiaryProps } from "../../util/interface";
import { useAppSelector } from "../../store/hook";

//Styled-components
export const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 10px 0;

  word-wrap: break-word;
  word-break: keep-all;

  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;

  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;

  cursor: pointer;

  .thumbnail {
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    color: white;

    svg {
      font-size: 80px;
    }
  }

  .thumbnail_1 {
    background-color: #8ecae6;
  }

  .thumbnail_2 {
    background-color: #219ebc;
  }

  .thumbnail_3 {
    background-color: #023047;
  }

  .thumbnail_4 {
    background-color: #ffb703;
  }

  .thumbnail_5 {
    background-color: #fb8500;
  }
`;

export const DiaryBody = styled.div`
  font-size: 14px;
  padding: 15px;

  h5 {
    font-weight: 700;
    font-size: 18px;

    margin-top: 0;
    margin-bottom: 10px;
  }

  .content {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .post-date {
    font-weight: 700;
    margin: 0;
  }
`;

//Component
const DiaryBox = ({ id, title, content, date, emotion }: DiaryProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const diaryList = useAppSelector((state) => state.diary);

  const targetDiary = diaryList.find((item) => item.id === id) as DiaryProps;

  const modalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  const contentSlicer = (content: DiaryProps["content"]) => {
    if (content.length > 12) {
      return content.slice(0, 12) + "...";
    }
    return content;
  };

  return (
    <Fragment>
      <StyledBox onClick={modalHandler}>
        <div className={["thumbnail", `thumbnail_${emotion}`].join(" ")}>
          <EmotionIcon emotion={emotion} />
        </div>
        <DiaryBody>
          <h5>{title}</h5>
          <p className="content">{contentSlicer(content)}</p>
          <hr />
          <p className="post-date">{getStringDate(new Date(date))}</p>
        </DiaryBody>
      </StyledBox>
      {isModalVisible && (
        <Modal
          modalHandler={modalHandler}
          children={<DiaryDetail {...targetDiary} />}
        /> //props로 함수 내려줘서 자식 컴포넌트에서도 같은 함수 사용하기
      )}
    </Fragment>
  );
};

export default React.memo(DiaryBox);
