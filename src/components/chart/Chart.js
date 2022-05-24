import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledChart = styled.div`
  width: 200px;
  height: 200px;
`;

export const data = {
  labels: ["Done", "Not yet"],
  datasets: [
    {
      label: ["Done", "Not yet"],
      data: [60, 40],
      backgroundColor: ["#A3CEF1", "#E7ECEF"],
      borderWidth: 3,
    },
  ],
};

const Chart = () => {
  return (
    <StyledChart>
      <Doughnut data={data} />
    </StyledChart>
  );
};

export default Chart;
