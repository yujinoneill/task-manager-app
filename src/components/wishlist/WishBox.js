import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { FaGrinHearts, FaWallet } from "react-icons/fa";

import BasicButton from "../style/BasicButton";
import { wishActions } from "../../store/wishList";
import Modal from "../common/Modal";
import { DiaryBody, StyledBox } from "../diary/DiaryBox";
import { getStringDate } from "../../util/date";
import WishEditor from "./WishEditor";

//Styled-components
const Icon = styled.div`
  color: white;
  height: 80px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.icon === "Wish" ? "#274c77" : "#6096ba"};

  svg {
    font-size: 30px;
  }
`;

const StyledBody = styled(DiaryBody)`
  background-color: ${(props) => props.icon === "Purchased" && "#e9ecef"};
  line-height: 1.5;
`;

const WishBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
`;

const WishBox = ({ id, date, icon, name, price, desc }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [originData, setOriginData] = useState();

  const wishList = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  useEffect(() => {
    const targetWish = wishList.find(
      (item) => parseInt(item.id) === parseInt(id)
    );

    if (targetWish) {
      setOriginData(targetWish);
    }
  }, [id, wishList]);

  const getHandler = useCallback((e) => {
    if (window.confirm("Did you get this item?")) {
      dispatch(
        wishActions.wishEdit({
          id,
          date,
          icon: "Purchased",
          name,
          price,
          desc,
        })
      );
    }
    e.stopPropagation(); //onClick이 전파돼서 StyledBox의 modalHandler를 실행시키지 않도록
  }, []);

  const modalHandler = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const contentSlicer = useMemo(() => {
    if (desc.length > 8) {
      return desc.slice(0, 8) + "...";
    }
    return desc;
  }, [desc]);

  console.log("box");

  return (
    <StyledBox onClick={modalHandler}>
      <Icon icon={icon}>
        {icon === "Wish" ? <FaGrinHearts /> : <FaWallet />}
      </Icon>
      <StyledBody icon={icon}>
        <h5>{name}</h5>
        <p>{price}</p>
        <p className="content">{contentSlicer}</p>
        <hr />
        <WishBottom>
          <p className="post-date">{getStringDate(new Date(date))}</p>
          {icon === "Wish" ? (
            <BasicButton name="GET" onClick={getHandler} />
          ) : null}
        </WishBottom>
      </StyledBody>
      {isModalVisible && (
        <Modal
          modalHandler={modalHandler}
          children={
            <WishEditor
              originData={originData}
              isEdit={true}
              modalHandler={modalHandler}
            />
          }
        />
      )}
    </StyledBox>
  );
};

export default React.memo(WishBox);
