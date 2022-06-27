import React from "react";

import {
  RiEmotionLaughFill,
  RiEmotionHappyFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
  RiEmotionSadFill,
} from "react-icons/ri";
import { EmotionType } from "../../util/interface";

export const EmotionIcon = ({ emotion }: EmotionType) => {
  let emotionIcon = <p />;

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
