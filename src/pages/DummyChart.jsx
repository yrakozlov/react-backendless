import React from "react";
import MainContainer from "../containers/MainContainer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DummyChart = () => {
  const data = [
    {
      name: "Red",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Blue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Yellow",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Green",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Purple",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Orange",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <MainContainer>
      <div className="page-container">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    </MainContainer>
  );
};

export default DummyChart;
