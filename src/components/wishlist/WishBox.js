import styled from "styled-components";

import WishItem from "./WishItem";

export const StyledDiv = styled.div`
  padding-top: 20px;
`;

const WishBox = (props) => {
  return (
    <StyledDiv>
      <WishItem
        icon={"wish"}
        itemName={"Ball cap"}
        price={"$35"}
        itemDesc={"My style"}
      />
      {/* <WishItem
        icon={"purchased"}
        itemName={"IT Network Book"}
        price={"$12"}
        itemDesc={"Study Network"}
      /> */}
    </StyledDiv>
  );
};

export default WishBox;
