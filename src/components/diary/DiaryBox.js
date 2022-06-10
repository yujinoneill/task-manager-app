import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getStringDate } from "../../util/date";
import Modal from "../Modal";
import DiaryDetail from "./DiaryDetail";

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

  img {
    width: 100%;
    box-sizing: border-box;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 10px;

  border-radius: 20px;
  background-color: ${(props) =>
    props.category === "Study" ? "#007bff" : "#ffb400"};

  color: white;
`;

const DiaryBox = ({ id, title, content, date, category, imgPreview }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const diaryList = useSelector((state) => state.diary);

  const targetDiary = diaryList.find(
    (item) => parseInt(item.id) === parseInt(id)
  );

  const modalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  const contentSlicer = (content) => {
    if (content.length > 12) {
      return content.slice(0, 12) + "...";
    }
    return content;
  };

  return (
    <div>
      <StyledBox onClick={modalHandler}>
        <img src={imgPreview} alt="diary-thumbnail" />
        <DiaryBody>
          <CategoryBadge category={category}>{category}</CategoryBadge>
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
    </div>
  );
};

export default DiaryBox;
