import styled from "styled-components";

const StyledSection = styled.section`
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
    margin-top: ${(props) => props.marginTop || "10px"};
    margin-bottom: 10px;
  }
`;

const BasicBox = ({ boxTitle, boxContent, padding, marginTop }) => {
  return (
    <StyledSection padding={padding} marginTop={marginTop}>
      <header>
        <h3>{boxTitle}</h3>
      </header>
      <div>{boxContent}</div>
    </StyledSection>
  );
};

export default BasicBox;