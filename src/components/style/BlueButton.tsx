import React from "react";

import styled from "styled-components";
import { StyledButton } from "./BasicButton";

//Styled-components
const Button = styled(StyledButton)`
  background-color: #6096ba;
  border: 1px solid #6096ba;
  color: white;

  &:hover {
    background-color: transparent;
    color: #6096ba;
  }
`;

//Component
  name: string;
  onClick?: () => void;
}

const BlueButton = ({ name, onClick }: BlueButtonProps) => {
  return <Button onClick={onClick}>{name}</Button>;
};

export default React.memo(BlueButton);
