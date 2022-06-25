import React from "react";

import {
  RiEmotionLaughFill,
  RiEmotionHappyFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
  RiEmotionSadFill,
} from "react-icons/ri";

export const EmotionIcon = ({ emotion }: { emotion: number }) => {
  let emotionIcon = <p></p>;

  if (emotion === 1) {
    emotionIcon = <RiEmotionLaughFill />;
  } else if (emotion === 2) {
    emotionIcon = <RiEmotionHappyFill />;
  } else if (emotion === 3) {
    emotionIcon = <RiEmotionNormalFill />;
  } else if (emotion === 4) {
    emotionIcon = <RiEmotionUnhappyFill />;
  } else {
    emotionIcon = <RiEmotionSadFill />;
  }

  return emotionIcon;
};

export default React.memo(EmotionIcon);
