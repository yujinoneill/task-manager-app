import styled from "styled-components";

//Styled-components
const Dimmer = styled.div`
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;

  overflow: auto;
  outline: 0;
`;

const ModalContent = styled.div`
  box-sizing: border-box;

  position: relative;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);

  width: 60%;
  min-width: 300px;

  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

const Modal = ({ children, modalHandler, width }) => {
  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Dimmer />
      <ModalWrapper tabIndex="-1" onClick={modalHandler}>
        <ModalContent tabIndex="0" onClick={preventPropagation}>
          {children}
        </ModalContent>
      </ModalWrapper>
    </div>
  );
};

export default Modal;
