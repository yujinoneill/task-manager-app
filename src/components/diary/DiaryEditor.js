import BasicBox from "../../components/BasicBox";
import { Container } from "../../pages/MyAccount";
import Button from "../../components/Button";
import { useContext, useRef, useState } from "react";

import { DiaryDispatchContext } from "../../App";
import { getStringDate } from "../../util/date";

import styled from "styled-components";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaQuoteLeft,
  FaCode,
  FaListOl,
  FaListUl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaIndent,
  FaOutdent,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 10px;

  h4 {
    margin: 0;
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
    margin-right: 10px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Toolbar = styled.div`
  border-bottom: 1px solid #ced4da;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  select {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;

    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }

  div {
    display: inline-block;
    margin: 0;

    button {
      box-sizing: border-box;
      cursor: pointer;

      padding: 10px;
      line-height: 1.5;
      text-align: center;

      background-color: transparent;
      border: none;

      border-radius: 5px;

      &:focus {
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
      }
    }
  }
`;

const DiaryEditor = ({ boxTitle, isEdit, originData }) => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const [category, setCategory] = useState("Study");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();

  const { onCreate } = useContext(DiaryDispatchContext);
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setCategory(originData.category);
      setTitle(originData.title);
      setContent(originData.content);
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
        onEdit(originData.id, date, title, content, category);
      } else {
    onCreate(title, content, category);
    navigate("/diary", { replace: true });
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
                  <select>
                    <option>Normal</option>
                    <option>Heading1</option>
                    <option>Heading2</option>
                    <option>Heading3</option>
                    <option>Heading4</option>
                    <option>Heading5</option>
                  </select>
                  <div>
                    <button type="button">
                      <FaBold />
                    </button>
                    <button type="button">
                      <FaItalic />
                    </button>
                    <button type="button">
                      <FaUnderline />
                    </button>
                    <button type="button">
                      <FaStrikethrough />
                    </button>
                  </div>
                  <div>
                    <button type="button">
                      <FaQuoteLeft />
                    </button>
                    <button type="button">
                      <FaCode />
                    </button>
                  </div>
                  <div>
                    <button type="button">
                      <FaListOl />
                    </button>
                    <button type="button">
                      <FaListUl />
                    </button>
                  </div>
                  <div>
                    <button type="button">
                      <FaAlignLeft />
                    </button>
                    <button type="button">
                      <FaAlignCenter />
                    </button>
                    <button type="button">
                      <FaAlignRight />
                    </button>
                  </div>
                  <div>
                    <button type="button">
                      <FaIndent />
                    </button>
                    <button type="button">
                      <FaOutdent />
                    </button>
                  </div>
                </Toolbar>
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
                <Button name="Cancel" onClick={() => navigate(-1)} />
              </div>
            </Grid>
          }
        />
      </div>
    </Container>
  );
};

export default DiaryEditor;
