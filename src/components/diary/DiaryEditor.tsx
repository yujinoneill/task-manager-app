import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import BasicBox from "../style/BasicBox";
import { Container } from "../../pages/Developer";
import BasicButton from "../style/BasicButton";
import BlueButton from "../style/BlueButton";

import { getStringDate } from "../../util/date";

import { diaryActions } from "../../store/diary";

import styled from "styled-components";
import EmotionItem from "./EmotionItem";
import { useAppSelector } from "../../store/hook";

// Styled-components
const Form = styled.form`
  margin-top: 10px;

  .diary-title {
    margin-top: 25px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;

    border: 1px solid #ced4da;
    border-radius: 5px;
    box-sizing: border-box;

    color: #8b8c89;

    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }

  textarea {
    min-height: 300px;
    resize: vertical;
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 0;
    border: none;
  }
`;

const DiaryContent = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 10px;

  h4 {
    margin-bottom: 20px;
  }

  input,
  select {
    padding: 10px 15px;

    border-radius: 5px;
    border: none;

    background-color: #e9ecef;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }

  button {
    margin: 10px 10px 10px 0;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const EmotionList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  width: 100%;

  border-bottom: 1px solid #ced4da;
`;

//Emotion data list
const emotionList = [
  {
    emotionId: 1,
    emotionDesc: "Perfect",
  },
  {
    emotionId: 2,
    emotionDesc: "Happy",
  },
  {
    emotionId: 3,
    emotionDesc: "Soso",
  },
  {
    emotionId: 4,
    emotionDesc: "Unhappy",
  },
  {
    emotionId: 5,
    emotionDesc: "Sad",
  },
];

interface DiaryEditorProps {
  boxTitle: string;
  isEdit?: boolean;
  originData?: any;
}

const DiaryEditor = ({ boxTitle, isEdit, originData }: DiaryEditorProps) => {
  const diary = useAppSelector((state) => state.diary);

  const [date, setDate] = useState(getStringDate(new Date()));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);

  const titleRef = useRef<HTMLInputElement>();
  const contentRef = useRef<HTMLTextAreaElement>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataId = useRef(0);

  useEffect(() => {
    if (diary && diary.length > 0) {
      dataId.current = parseInt(diary[0].id) + 1;
    }
  }, []);

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setTitle(originData.title);
      setContent(originData.content);
      setEmotion(originData.emotion);
    }
  }, [isEdit, originData]);

  const emotionHandler = useCallback((emotion: number) => {
    setEmotion(emotion);
  }, []);

  const submitHandler = () => {
    if (title.length < 1) {
      titleRef.current.focus();
      return;
    }

    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit
          ? "Do you want to edit your diary?"
          : "Do you want to publish new diary?"
      )
    ) {
      if (isEdit) {
        dispatch(
          diaryActions.diaryEdit({
            id: originData.id,
            date: new Date(originData.date).getTime(),
            title,
            content,
            emotion,
          })
        );
      } else {
        dispatch(
          diaryActions.diaryCreate({
            id: dataId.current,
            date: new Date().getTime(),
            title,
            content,
            emotion,
          })
        );
      }
    }

    navigate("/diary", { replace: true });
  };

  const cancelHandler = useCallback(() => {
    if (window.confirm("Are you sure you want to cancel it?")) {
      navigate(-1);
    }
    return;
  }, []);

  return (
    <Container>
      <div>
        <BasicBox
          boxTitle={boxTitle}
          boxContent={
            <Form>
              <div className="diary-title">
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="Diary Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <DiaryContent>
                <EmotionList>
                  {emotionList.map((item) => (
                    <EmotionItem
                      key={item.emotionId}
                      {...item}
                      emotionHandler={emotionHandler}
                      isSelected={item.emotionId === emotion}
                    />
                  ))}
                </EmotionList>
                <textarea
                  ref={contentRef}
                  placeholder="Write your day!"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </DiaryContent>
            </Form>
          }
        />
      </div>
      <div>
        <BasicBox
          boxTitle="Setting"
          boxContent={
            <Grid>
              <div>
                <h4>Posting Date</h4>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  readOnly
                />
              </div>
              <div>
                <BlueButton
                  name={isEdit ? "Edit" : "Publish"}
                  onClick={submitHandler}
                />
                <BasicButton name="Cancel" onClick={cancelHandler} />
              </div>
            </Grid>
          }
        />
      </div>
    </Container>
  );
};

export default React.memo(DiaryEditor);