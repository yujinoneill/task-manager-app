import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;
  color: #274c77;

  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;

  h3 {
    margin: 0;
    color: #6096ba;
  }

  div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BasicBox = ({ boxTitle, boxContent }) => {
  return (
    <Section>
      <header>
        <h3>{boxTitle}</h3>
      </header>
      <div>{boxContent}</div>
    </Section>
  );
};

export default BasicBox;
