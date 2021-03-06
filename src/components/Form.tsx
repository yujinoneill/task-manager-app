import styled from "styled-components";

//Styled-components
export const StyledForm = styled.form`
  padding: 5px;

  button {
    margin-right: 10px;
  }
`;

export const StyledDiv = styled.div<{ number: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.number}, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;

  margin: 10px 0;

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

//Component
const Form = () => {
  return (
    <StyledForm>
      <StyledDiv number={2}>
        <div>
          <label>
            First Name
            <input type="text" value="Yujin" readOnly />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input type="text" value="Hwang" readOnly />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={2}>
        <div>
          <label>
            E-mail
            <input type="email" value="yujinoneill@gmail.com" readOnly />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" value="password" readOnly />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={3}>
        <div>
          <label>
            City
            <input type="text" value="Gwangju" readOnly />
          </label>
        </div>
        <div>
          <label>
            Country
            <input type="text" value="South Korea" readOnly />
          </label>
        </div>
        <div>
          <label>
            Postal Code
            <input type="text" value="123 - 456" readOnly />
          </label>
        </div>
      </StyledDiv>
      <StyledDiv number={1}>
        <div>
          <label>
            About Me
            <textarea
              value={
                "Hello, I'm Yujin a.k.a Oneill! I am studying Front-end Development. If you want to feedback this project, Please contact me anytime!"
              }
              readOnly
            />
          </label>
        </div>
      </StyledDiv>
    </StyledForm>
  );
};

export default Form;
