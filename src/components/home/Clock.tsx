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
  height: 90px;

  background-color: #8b8c89;
`;

const MinHand = styled(Hand)`
  width: 6px;
  height: 80px;

  background-color: #6096ba;
`;

const HourHand = styled(Hand)`
  width: 6px;
  height: 60px;

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

const Mark = styled.div`
  div {
    position: absolute;
    border-radius: 5px;

    background-color: #eee;
    box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3), -0.4px -0.4px 1px #eee;
  }

  .three {
    width: 15px;
    height: 3px;

    right: 3%;
  }

  .six {
    width: 3px;
    height: 15px;

    bottom: 3%;
  }

  .nine {
    width: 15px;
    height: 3px;

    left: 3%;
  }

  .twelve {
    width: 3px;
    height: 15px;

    top: 3%;
  }
`;

//Component
const Clock = () => {
  const [secondDeg, setSecondDeg] = useState<number>();
  const [minDeg, setMinDeg] = useState<number>();
  const [hourDeg, setHourDeg] = useState<number>();

  const setDate = () => {
    const now = new Date(); //현재 날짜 및 시간 받아오기

    const seconds = now.getSeconds();
    const secondsDegree = seconds * (360 / 60); //60초간 360도를 도니까 1초당 6도씩

    const mins = now.getMinutes();
    const minDegree = mins * (360 / 60) + seconds * (6 / 60); //초침이 움직일 때 분침도 매초마다 조금씩 움직이기 때문에 이를 반영

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
    <ClockWidget>
      <Mark>
        <div className="three"></div>
        <div className="six"></div>
        <div className="nine"></div>
        <div className="twelve"></div>
      </Mark>
      <SecondHand style={{ transform: `rotate(${secondDeg}deg)` }} />
      <MinHand style={{ transform: `rotate(${minDeg}deg)` }} />
      <HourHand style={{ transform: `rotate(${hourDeg}deg)` }} />
      <Center />
    </ClockWidget>
  );
};

export default Clock;
