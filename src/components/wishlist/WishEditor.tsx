import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { useAppSelector } from "../../store/hook";
import { wishActions } from "../../store/wishList";
import { WishProps } from "../../util/interface";
import BasicButton from "../style/BasicButton";
import BlueButton from "../style/BlueButton";

//Styled-components
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-top: 10px;

    border: 1px solid #ced4da;
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }
`;

//Component
const WishEditor = ({ originData, isEdit, modalHandler }: WishProps) => {
  const wishList = useAppSelector((state) => state.wish);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("₩");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const dataId = useRef(0);

  useEffect(() => {
    if (wishList && wishList.length > 0) {
      dataId.current = wishList[0].id + 1;
    }
  }, []);

  useEffect(() => {
    if (isEdit && originData) {
      setName(originData.name);
      setPrice(originData.price);
      setDesc(originData.desc);
      setIcon(originData.icon);
      setIsDisabled(true);
    }
  }, [isEdit, originData]);

  const submitHandler = () => {
    if (name.length < 1) {
      nameRef.current?.focus();
      return;
    }

    if (price.length < 1) {
      priceRef.current?.focus();
      return;
    }

    if (desc.length < 1) {
      descRef.current?.focus();
      return;
    }

    if (isDisabled) {
      if (window.confirm("Do you want to edit your wish?")) {
        setIsDisabled(false);
        return;
      }
    }

    if (
      window.confirm(
        isEdit
          ? "Do you want to save your changes?"
          : "Do you want to add a new wish?"
      )
    ) {
      if (isEdit && originData) {
        dispatch(
          wishActions.wishEdit({
            id: originData.id,
            date: new Date(originData.date).getTime(),
            icon,
            name,
            price,
            desc,
          })
        );
      } else {
        dispatch(
          wishActions.wishCreate({
            id: dataId.current,
            date: new Date().getTime(),
            icon: "Wish",
            name,
            price,
            desc,
          })
        );
      }
    }
    modalHandler();
  };

  const removeHandler = useCallback(() => {
    if (originData && window.confirm("Are you sure you want to delete it?")) {
      dispatch(wishActions.wishRemove(originData.id));
    }
  }, [dispatch]);

  return (
    <StyledDiv>
      <div>
        <label>
          Item Name
          <input
            type="text"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isDisabled}
          />
        </label>
      </div>
      <div>
        <label>
          Price
          <input
            type="text"
            ref={priceRef}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isDisabled}
          />
        </label>
      </div>
      <div>
        <label>
          Description
          <input
            type="text"
            ref={descRef}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            disabled={isDisabled}
          />
        </label>
      </div>
      {isEdit && (
        <div>
          <label>
            Status
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              disabled={isDisabled}
            >
              <option>Wish</option>
              <option>Purchased</option>
            </select>
          </label>
        </div>
      )}
      <BlueButton name={isEdit ? "Edit" : "Add"} onClick={submitHandler} />
      {isEdit && <BasicButton name="Delete" onClick={removeHandler} />}
    </StyledDiv>
  );
};

export default React.memo(WishEditor);
