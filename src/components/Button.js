import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;

  background-color: ${(props) => props.mainColor || "transparent"};
  border: 1px solid ${(props) => props.mainColor || "#6c757d"};
  color: ${(props) => props.textColor || "#6c757d"};

  padding: 10px 15px;
  border-radius: 5px;

  text-align: center;
  text-decoration: none;

  font-family: inherit;
  box-sizing: border-box;

  transition: 0.25s;

  &:hover {
    background-color: ${(props) => props.textColor || "#6c757d"};
    color: ${(props) => props.mainColor || "white"};
  }
`;

const Button = ({ name, mainColor, textColor }) => {
  return (
    <StyledButton mainColor={mainColor} textColor={textColor}>
      {name}
    </StyledButton>
  );
};

export default Button;
