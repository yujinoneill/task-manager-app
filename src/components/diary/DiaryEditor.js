import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import BasicBox from "../../components/BasicBox";
import { Container } from "../../pages/MyAccount";
import Button from "../../components/Button";

import { getStringDate } from "../../util/date";

import { diaryActions } from "../../store/diary";

import styled from "styled-components";

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

  img {
    max-width: 500px;
    padding: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const Toolbar = styled.div`
  border-bottom: 1px solid #ced4da;

  input {
    border: none;
    margin: 0;

    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }
`;

const DiaryEditor = ({ boxTitle, isEdit, originData }) => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const [category, setCategory] = useState("Study");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgPreview, setImgPreview] = useState();

  const titleRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("data");

    if (localData) {
      const localDiaryList = JSON.parse(localData).diary; //localData 직렬화
      if (localDiaryList && localDiaryList.length > 0) {
        dataId.current = parseInt(localDiaryList[0].id) + 1; //단순히 localDiaryList의 길이를 기준으로 current값을 변경하면 삭제된 다이어리가 있을 때 id가 겹칠 수 있음
      }
    }
  }, []);

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setCategory(originData.category);
      setTitle(originData.title);
      setContent(originData.content);
      setImgPreview(originData.imgPreview);
    }
  }, [isEdit, originData]);

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
            category,
            imgPreview,
          })
        );
      } else {
        dispatch(
          diaryActions.diaryCreate({
            id: dataId.current,
            date: new Date().getTime(),
            title,
            content,
            category,
            imgPreview,
          })
        );
      }
    }

    navigate("/diary", { replace: true });
  };

  const cancelHandler = () => {
    if (window.confirm("Are you sure you want to cancel it?")) {
      navigate(-1);
    }
    return;
  };

  const readFile = (e) => {
    if (e.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImgPreview(e.target.result);
      };
    }
  };

  return (
    <Container>
      <div>
        <BasicBox
          marginTop="0"
          marginBottom="0"
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
                <Toolbar>
                  <input
                    type="file"
                    accept={[".jpg", ".png"]}
                    onChange={readFile}
                  />
                </Toolbar>
                {imgPreview ? <img src={imgPreview} alt="preview" /> : null}
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
                />
              </div>
              <div>
                <h4>Category</h4>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Study</option>
                  <option>Daily</option>
                </select>
              </div>
              <div>
                <Button
                  name={isEdit ? "Edit" : "Publish"}
                  color="#6096ba"
                  onClick={submitHandler}
                />
                <Button name="Cancel" onClick={cancelHandler} />
              </div>
            </Grid>
          }
        />
      </div>
    </Container>
  );
};

export default DiaryEditor;
