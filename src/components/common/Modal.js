import { useEffect } from "react";
import styled from "styled-components";

//Styled-components
const ModalWrapper = styled.div`
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);

  outline: 0;
`;

const ModalContent = styled.div`
  box-sizing: border-box;

  position: relative;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgb(0, 0, 0, 0.15);

  width: 40%;
  min-width: 300px;
  max-height: 80%;

  overflow: auto;

  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px;

  @media screen and (max-width: 992px) {
    width: 60%;
  }

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

const Modal = ({ children, modalHandler }) => {
  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <ModalWrapper tabIndex="-1" onClick={modalHandler}>
      <ModalContent tabIndex="0" onClick={preventPropagation}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
