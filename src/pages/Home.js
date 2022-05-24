import styled from "styled-components";

import BasicBox from "../components/BasicBox";
import CheckForm from "../components/CheckForm";
import Chart from "../components/chart/Chart";
const Container = styled.div`
  display: flex;

  .annual-plan,
  .monthly-plan {
    width: 50%;
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-right: 20px;
  }

  img {
    height: 140px;
    margin: auto;
  }
`;

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  .progress-text {
    display: flex;
    justify-content: space-between;
  }
`;

const Progress = styled.progress`
  appearance: none;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: #e9ecef;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: #6096ba;
    border-radius: 10px;
  }
`;

const Home = () => {
  return (
    <div>
      <BasicBox
        boxTitle={"Welcome back, Oneill!"}
        boxContent={
          <WelcomeContent>
            <p>
              Your tasks are waiting for you. Check your things and Manage your
              time more effectively.
            </p>
            <img
              src={process.env.PUBLIC_URL + "/assets/undraw_task_list_6x9d.svg"}
              alt="welcome-img"
            />
          </WelcomeContent>
        }
      />
      <BasicBox
        boxTitle={"Wonderful 2022"}
        boxContent={
          <Container>
            <div className="annual-plan">
              <div className="check-box">
                <CheckForm label={"Lose weight"} />
                <CheckForm label={"Make exercise a habbit"} />
                <CheckForm label={"Travel to other city"} />
                <CheckForm label={"Get a job"} />
              </div>
              <ProgressBox>
                <div className="progress-text">
                  <span>Goals</span>
                  <span>100%</span>
                </div>
                <Progress value="70" max="100" />
              </ProgressBox>
            </div>
            <div className="monthly-plan">
              <Chart />
            </div>
          </Container>
        }
      />
    </div>
  );
};

export default Home;
