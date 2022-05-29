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

import BasicBox from "../../components/BasicBox";
import { Container } from "../MyAccount";
import Button from "../../components/Button";

const Form = styled.form`
  margin-top: 10px;

  .post-title {
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

const PostContent = styled.div`
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

const NewPost = () => {
  return (
    <Container>
      <div>
        <BasicBox
          marginTop="0"
          marginBottom="0"
          boxTitle="New Post"
          boxContent={
            <Form>
              <div className="post-title">
                <input type="text" placeholder="Post Title" />
              </div>
              <PostContent>
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
                <textarea placeholder="Write your day!" />
              </PostContent>
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
                <input type="date" />
              </div>
              <div>
                <h4>Category</h4>
                <select>
                  <option>Study</option>
                  <option>Daily</option>
                </select>
              </div>
              <div>
                <Button name="Publish" color="#6096ba" />
                <Button name="Cancel" />
              </div>
            </Grid>
          }
        />
      </div>
    </Container>
  );
};

export default NewPost;
