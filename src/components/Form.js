import styled from "styled-components";

import Button from "./Button";

export const StyledForm = styled.form`
  padding: 5px;

  button {
    margin-right: 10px;
  }
`;

export const StyledDiv = styled.div`
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

//맨 처음에는 value값 비워놓은 다음에 로그인하면 저장되어 있는 데이터 불러와서 채워주는 형식으로 구현
//근데 회원가입 기능 안 만들 거면... 필요 없는 페이지 아닌가? 일단 로컬스토리지에 저장하는 거라도 구현하자. 만든 거 아깝잖어...
//프로필 카드 이미지는 기본 이미지로 해놓고, 이름이랑 아이디는 로그인할 때 입력하라고 하고, 아래 링크들은 없애기

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
            <input type="text" value="Oneill" readOnly />
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
            <input type="text" value="Seoul" readOnly />
          </label>
        </div>
        <div>
          <label>
            Contry
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
              value={"Hello, I'm Oneill! I am studying Front-end Development."}
              readOnly
            />
          </label>
        </div>
      </StyledDiv>
      <Button type="submit" name={"Save Change"} color={"#6096ba"} />
      <Button type="reset" name={"Cancel"} />
    </StyledForm>
  );
};

export default Form;
