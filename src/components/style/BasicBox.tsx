import styled from "styled-components";

//Styled-components
const StyledSection = styled.section<{ padding: BasicBoxProps["padding"] }>`
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;
  color: #274c77;

  padding: ${(props) => props.padding || "20px"};
  margin-top: 20px;
  border-radius: 5px;

  overflow: hidden;

  h3 {
    margin: 0;
    color: #6096ba;
  }

  div {
    box-sizing: border-box;
  }
`;

//Types
interface BasicBoxProps {
  boxTitle?: string;
  boxContent: JSX.Element;
  padding?: string;
}

const BasicBox = ({ boxTitle, boxContent, padding }: BasicBoxProps) => {
  return (
    <StyledSection padding={padding}>
      <header>
        <h3>{boxTitle}</h3>
      </header>
      {boxContent}
    </StyledSection>
  );
};

export default BasicBox;
