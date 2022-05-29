import styled from "styled-components";

import { FaGrinHearts, FaWallet } from "react-icons/fa";

const Icon = styled.div`
  color: white;
  min-width: 120px;
  height: 80px;

  cursor: pointer;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.icon === "wish" ? "#274c77" : "#6096ba"};

  svg {
    font-size: 30px;
  }
`;

const WishIcon = ({ icon }) => {
  return (
    <Icon icon={icon}>{icon === "wish" ? <FaGrinHearts /> : <FaWallet />}</Icon>
  );
};

export default WishIcon;
