import styled from "styled-components";
import { StyledButton } from "./BasicButton";

const Button = styled(StyledButton)`
  background-color: #6096ba;
  border: 1px solid #6096ba;
  color: white;

  &:hover {
    background-color: transparent;
    color: #6096ba;
  }
`;

const BlueButton = ({ name, onClick }) => {
  return <Button onClick={onClick}>{name}</Button>;
};

export default BlueButton;
