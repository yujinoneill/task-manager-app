import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Styled-components
const ClockWidget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;

  width: 240px;
  height: 240px;

  position: relative;
  background-color: #e7ecef;

  border: 20px solid white;
  border-radius: 50%;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
    inset 4px 4px 10px rgba(0, 0, 0, 0.15), -4px -4px 10px #eeeeee;

  div {
    transition: all 0.05s;
  }
`;

const Hand = styled.div`
  position: absolute;
  bottom: 50%;

  border-radius: 5px;

  transform-origin: bottom;
`;

const SecondHand = styled(Hand)`
  width: 3px;
  height: 85px;

  background-color: #8b8c89;
`;

const MinHand = styled(Hand)`
  width: 6px;
  height: 75px;

  background-color: #6096ba;
`;

const HourHand = styled(Hand)`
  width: 6px;
  height: 65px;

  background-color: #a3cef1;
`;

const Center = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  background-color: #8b8c89;

  position: absolute;
  z-index: 99;
`;

const Clock = () => {
  const [secondDeg, setSecondDeg] = useState();
  const [minDeg, setMinDeg] = useState();
  const [hourDeg, setHourDeg] = useState();

  const setDate = () => {
    const now = new Date(); //현재 날짜 및 시간 받아오기

    const seconds = now.getSeconds();
    const secondsDegree = seconds * (360 / 60); //60초간 360도를 도니까 1초당 6도씩

    const mins = now.getMinutes();
    const minDegree = mins * (360 / 60) + seconds * (6 / 60); //초침이 움직임에 따라 분침도 매초마다 조금씩 움직이기 때문에 이를 반영

    const hours = now.getHours();
    const hourDegree = hours * (360 / 12) + mins * (30 / 60); //분침과 마참가지로 시침도 매초마다 조금씩 움직이기 때문에 이를 반영

    setSecondDeg(secondsDegree);
    setMinDeg(minDegree);
    setHourDeg(hourDegree);
  };

  useEffect(() => {
    setInterval(setDate, 500);
    setDate();
  });

  return (
    // <ClockWidget>
    <ClockWidget>
      <SecondHand style={{ transform: `rotate(${secondDeg}deg)` }} />
      <MinHand style={{ transform: `rotate(${minDeg}deg)` }} />
      <HourHand style={{ transform: `rotate(${hourDeg}deg)` }} />
      <Center />
    </ClockWidget>
    // </ClockWidget>
  );
};

export default Clock;
