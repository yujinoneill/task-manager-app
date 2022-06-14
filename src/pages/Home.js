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
  grid-template-columns: auto 0.6fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;

  margin: 10px 0;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TodoList = styled.div`
  padding-right: 5%;
  border-right: 1px solid #e7ecef;

  .check-box {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    border-right: none;
    border-bottom: 1px solid #e7ecef;

    padding-right: 0;
  }
`;

const Add = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid #6c757d;

    padding: 10px 5px;

    margin-right: 10px;

    &:focus,
    &:active {
      border: none;
      outline: none;
      border-bottom: 1px solid #6c757d;
    }
  }
`;

const Widget = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  place-items: center;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;

  .progress-text {
    display: flex;
    justify-content: space-between;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 20px;

  margin: 10px 0;
  border-radius: 10px;

  background-color: #e9ecef;

  .progress-bar {
    width: ${(props) => props.width};
    height: 100%;

    background-color: #6096ba;
    border-radius: 10px;

    transition: width 1s;
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
