import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;

  background-color: ${(props) => props.color || "transparent"};
  border: 1px solid ${(props) => props.color || "#6c757d"};
  color: ${(props) => (props.color === "#6096ba" ? "white" : "#6c757d")};

  padding: 10px 15px;
  border-radius: 5px;

  text-align: center;
  text-decoration: none;

  font-family: inherit;
  box-sizing: border-box;

  transition: 0.25s;

  &:hover {
    background-color: ${(props) =>
      props.color === "#6096ba" ? "transparent" : "#6c757d"};
    color: ${(props) => props.color || "white"};
  }
`;

const Button = ({ name, color }) => {
  return <StyledButton color={color}>{name}</StyledButton>;
};

export default Button;
