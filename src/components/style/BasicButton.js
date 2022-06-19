import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;

  background-color: transparent;
  border: 1px solid #6c757d;
  color: #6c757d;

  padding: 10px 15px;
  border-radius: 5px;

  text-align: center;
  text-decoration: none;

  font-family: inherit;
  box-sizing: border-box;

  transition: 0.25s;

  &:hover {
    background-color: #6c757d;
    color: white;
  }
`;

const BasicButton = ({ name, onClick }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default BasicButton;
