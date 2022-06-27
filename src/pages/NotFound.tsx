import { Link } from "react-router-dom";

import styled from "styled-components";
import BasicButton from "../components/style/BasicButton";

import { Background, LoginBox } from "./Login";

//Styled-components
const Content = styled(LoginBox)`
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;

  p {
    font-size: 20px;
  }
`;

//Component
const NotFound = () => {
  return (
    <Background>
      <Content>
        <img
          src={
            process.env.PUBLIC_URL + "/assets/undraw_page_not_found_re_e9o6.svg"
          }
          alt="404-img"
        />
        <p>Ooooooooooooooooops!</p>
        <Link to="/">
          <BasicButton name="Go Back to Home" />
        </Link>
      </Content>
    </Background>
  );
};

export default NotFound;
