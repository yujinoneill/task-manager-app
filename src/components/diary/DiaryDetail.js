import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStringDate } from "../../util/date";
import Button from "../Button";

//Styled-component
const StyledHeader = styled.header`
  h2 {
    color: #6096ba;
  }

  p {
    font-weight: 700;
  }
`;

const Content = styled.div`
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`;

const StyledButton = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: flex-end;
`;

const DiaryDetail = ({ category, content, date, title, id }) => {
  return (
    <div>
      <StyledHeader>
        <h2>{title}</h2>
        <p>
          {getStringDate(new Date(date))} / {category}
        </p>
      </StyledHeader>
      <hr />
      <Content>{content}</Content>
      <StyledButton>
        <Link to={`/edit-diary/${id}`}>
          <Button name="Edit" color="#6096ba" />
        </Link>
      </StyledButton>
    </div>
  );
};

export default DiaryDetail;
