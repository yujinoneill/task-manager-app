import styled from "styled-components";

import Filter from "../Filter";
import WishItem from "./WishItem";

export const StyledDiv = styled.div`
  padding-top: 20px;
`;

const WishBox = (props) => {
  return (
    <StyledDiv>
      <Filter
        btnName={"Add a New Wish"}
        category1={"Wish"}
        category2={"Purchased"}
        path="/new-wish"
      />
      <div className="list">
        <WishItem
          icon={"wish"}
          itemName={"Ball cap"}
          price={"$35"}
          itemDesc={"My style"}
        />
        <WishItem
          icon={"purchased"}
          itemName={"IT Network Book"}
          price={"$12"}
          itemDesc={"Study Network"}
        />
      </div>
    </StyledDiv>
  );
};

export default WishBox;
