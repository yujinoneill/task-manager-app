import styled from "styled-components";

import BasicBox from "../components/BasicBox";
import CheckForm from "../components/CheckForm";
import Chart from "../components/chart/Chart";
import Button from "../components/Button";

import { todoActions } from "../store/todoList";

//Styled-components
const WelcomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  p {
    margin-right: 20px;
  }

  img {
    height: 140px;
    margin: auto;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    p {
      margin-right: 0;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  margin: 10px 0;

  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AnnualPlan = styled.div`
  padding-right: 5%;
  border-right: 1px solid #e7ecef;

  @media screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e7ecef;
  }
`;

const MonthlyPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;

  select {
    cursor: pointer;

    outline: none;
    border: none;
    background-color: #e9ecef;
    border-radius: 5px;

    padding: 10px 15px;

    font-family: "Ubuntu", sans-serif;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const WeeklyPlan = styled.div`
  padding-left: 5%;
  border-left: 1px solid #e7ecef;

  select {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #e7ecef;
    padding-right: 5%;
  }
`;

const WeeklyHeader = styled(StyledHeader)`
  grid-template-columns: repeat(2, 1fr);

  margin: 10px 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;

  .progress-text {
    display: flex;
    justify-content: space-between;
  }
`;

const Progress = styled.progress`
  appearance: none;
  width: 100%;

  margin: 10px 0;

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
  const [todo, setTodo] = useState("");

  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      todoActions.todoCreate({
        id: Math.random(),
        checked: false,
        todo,
      })
    );
    setTodo("");
  };

  useEffect(() => {
    const localData = localStorage.getItem("data");

    if (localData) {
      const localTodoList = JSON.parse(localData).todo;
      dispatch(todoActions.todoInit(localTodoList));
    }
  }, []);

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
            <AnnualPlan>
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <Button name="Add a Todo" onClick={submitHandler} />
              <div className="check-box">
                {todoList.map((item) => (
                  <CheckForm key={item.id} {...item} />
                ))}
                <CheckForm label={"Get a job"} />
              </div>
              <ProgressBox>
                <div className="progress-text">
                  <span>Goals</span>
                  <span>100%</span>
                </div>
                <Progress value="70" max="100" />
              </ProgressBox>
            </TodoList>
            <MonthlyPlan>
              <select>
                <option value="may">May</option>
                <option value="april">April</option>
                <option value="march">March</option>
                <option value="february">Febraury</option>
                <option value="january">January</option>
              </select>
              <Chart />
            </MonthlyPlan>
            <WeeklyPlan>
              <WeeklyHeader>
                <select>
                  <option value="Week 1">Week 1</option>
                  <option value="Week 2">Week 2</option>
                  <option value="Week 3">Week 3</option>
                  <option value="Week 4">Week 4</option>
                  <option value="Week 5">Week 5</option>
                </select>
                <Button name={"Add a New Plan"} color={"#6096ba"} />
              </WeeklyHeader>
              <div>
                <CheckForm label={"Read 「The Stranger」"} />
                <CheckForm label={"Go to cinema"} />
                <CheckForm label={"Read 「1984」"} />
                <CheckForm label={"Finish the Project"} />
              </div>
            </WeeklyPlan>
          </Container>
        }
      />
    </div>
  );
};

export default Home;
