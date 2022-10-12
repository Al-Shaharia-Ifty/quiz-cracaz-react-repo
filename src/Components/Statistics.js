import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center mt-20">
      <BarChart width={1000} height={450} data={data.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Statistics;
