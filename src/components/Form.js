import styled from "styled-components";

import Button from "./Button";

const StyledForm = styled.form`
  padding: 5px;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.number}, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;

  div {
    margin: 0;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 10px;
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
    resize: vertical;
    font-family: "Ubuntu", sans-serif;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(${(props) => props.number}, 1fr);
    grid-gap: 0;
  }
`;

const Form = () => {
  return (
    <StyledForm>
      <StyledDiv number={2}>
        <div>
          <label>
            First Name
            <input type="text" value="Yujin" />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input type="text" value="Oneill" />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={2}>
        <div>
          <label>
            E-mail
            <input type="email" value="yujinoneill@gmail.com" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" value="password" />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={3}>
        <div>
          <label>
            City
            <input type="text" value="Seoul" />
          </label>
        </div>
        <div>
          <label>
            Contry
            <input type="text" value="South Korea" />
          </label>
        </div>
        <div>
          <label>
            Postal Code
            <input type="text" value="123 - 456" />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={1}>
        <div>
          <label>
            About Me
            <textarea
              value={"Hello, I'm Oneill! I am studying Front-end Development."}
            />
          </label>
        </div>
      </StyledDiv>
      <Button
        type="submit"
        name={"Save Change"}
        mainColor={"#6096BA"}
        textColor={"white"}
      />
      <Button type="reset" name={"Cancel"} />
    </StyledForm>
  );
};

export default Form;
