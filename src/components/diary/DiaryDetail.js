import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getStringDate } from "../../util/date";
import BlueButton from "../style/BlueButton";
import BasicButton from "../style/BasicButton";
import { diaryActions } from "../../store/diary";
import { EmotionIcon } from "./EmotionIcon";

//Styled-component
const StyledHeader = styled.header`
  h2 {
    color: #6096ba;
  }

  p {
    font-weight: 700;
  }
`;

export const Content = styled.div`
  padding: 20px;

  word-break: keep-all;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`;

export const StyledButton = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`;

const DiaryDetail = ({ emotion, content, date, title, id }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch(diaryActions.diaryRemove(id));
    }
  };

  return (
    <div>
      <StyledHeader>
        <h2>{title}</h2>
        <p>
          {getStringDate(new Date(date))} / {<EmotionIcon emotion={emotion} />}
        </p>
      </StyledHeader>
      <hr />
      <Content>{content}</Content>
      <StyledButton>
        <Link to={`/edit-diary/${id}`}>
          <BlueButton name="Edit" />
        </Link>
        <BasicButton name="Delete" onClick={removeHandler} />
      </StyledButton>
    </div>
  );
};

export default DiaryDetail;
