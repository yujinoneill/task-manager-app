import styled from "styled-components";

import WishIcon from "./WishIcon";
import Button from "../Button";

const Item = styled.div`
  max-height: 100px;

  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;

  padding-left: 10px;
  padding-right: 10px;

  background-color: ${(props) => (props.icon === "wish" ? "white" : "#e7ecef")};
  border-radius: 5px;

  @media screen and (max-width: 576px) {
    max-height: none;

    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-content: center;

  padding: 0 15px;

  h4,
  p {
    margin-top: auto;
    margin-bottom: auto;
  }

  @media screen and (max-width: 576px) {
    text-align: center;
  }
`;

const ItemButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WishItem = ({ icon, itemName, price, itemDesc }) => {
  return (
    <Item icon={icon}>
      <WishIcon icon={icon} />
      <ItemContent>
        <h4>{itemName}</h4>
        <p>{price}</p>
        <p>{itemDesc}</p>
      </ItemContent>
      <ItemButton>
        <Button name={"Got it"} />
      </ItemButton>
    </Item>
  );
};

export default WishItem;
