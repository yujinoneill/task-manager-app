import styled from "styled-components";

import EmotionIcon from "./EmotionIcon";

const EmotionBox = styled.div`
  cursor: pointer;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 70px;
  padding: 10px;

  color: ${(props) => props.isSelected === true && "#6096ba"};

  span {
    font-size: 12px;
  }

  @media screen and (max-width: 576px) {
    font-size: 40px;
  }
`;

const EmotionItem = ({
  emotionId,
  emotionDesc,
  emotionHandler,
  isSelected,
}) => {
  return (
    <EmotionBox
      isSelected={isSelected}
      onClick={() => emotionHandler(emotionId)}
    >
      <div className="icon">{<EmotionIcon emotion={emotionId} />}</div>
      <span>{emotionDesc}</span>
    </EmotionBox>
  );
};

export default EmotionItem;
