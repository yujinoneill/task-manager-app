import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Done", value: 50 },
  { name: "Not yet", value: 50 },
];

const COLORS = ["#A3CEF1", "#E7ECEF"];

export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          className="pie-chart"
          width="100%"
          height="100%"
          onMouseEnter={this.onPieEnter}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={80}
            fill="#8884d8"
            startAngle={90}
            endAngle={450}
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
