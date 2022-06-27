import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BlueButton from "../style/BlueButton";
import BasicButton from "../style/BasicButton";
import { diaryActions } from "../../store/diary";
import { EmotionIcon } from "./EmotionIcon";
import { getStringDate } from "../../util/date";
import { DiaryProps } from "../../util/interface";

//Styled-component
const StyledHeader = styled.header`
  h2 {
    color: #6096ba;
  }

  p {
    display: flex;

    font-weight: 700;

    svg {
      font-size: 20px;
      margin-left: 5px;
    }
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

//Component
const DiaryDetail = ({ emotion, content, date, title, id }: DiaryProps) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch(diaryActions.diaryRemove(id));
    }
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default React.memo(DiaryDetail);
