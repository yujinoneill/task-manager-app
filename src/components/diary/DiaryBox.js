import { useContext, useState } from "react";
import styled from "styled-components";
import { DiaryStateContext } from "../../App";

import { getStringDate } from "../../util/date";
import Modal from "../Modal";
import DiaryDetail from "./DiaryDetail";

const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 10px 0;

  word-wrap: break-word;

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

const DiaryBody = styled.div`
  font-size: 14px;
  padding: 15px;

  h5 {
    font-weight: 700;
    font-size: 18px;

    margin-top: 0;
    margin-bottom: 10px;
  }

  .diary-content {
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

// Images
const images = [
  "clement-helardot-95YRwf6CNw8-unsplash",
  "danial-igdery-FCHlYvR5gJI-unsplash",
  "ferenc-almasi-eYpcLDXHVb0-unsplash",
  "fotis-fotopoulos-LJ9KY8pIH3E-unsplash",
  "juanjo-jaramillo-mZnx9429i94-unsplash",
];

const DiaryBox = ({ id, title, content, date, category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const diaryList = useContext(DiaryStateContext);

  const targetDiary = diaryList.find(
    (item) => parseInt(item.id) === parseInt(id)
  );

  const modalHandler = () => setIsModalVisible(!isModalVisible);

  return (
    <div>
      <StyledBox onClick={modalHandler}>
        <img
          src={process.env.PUBLIC_URL + `assets/${images[id]}.jpg`}
          alt="diary-thumbnail"
        />
        <DiaryBody>
          <CategoryBadge category={category}>{category}</CategoryBadge>
          <h5>{title}</h5>
          <p className="diary-content">{content}</p>
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
