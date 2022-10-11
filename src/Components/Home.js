import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCart from "./QuizCart";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Header</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-10 mt-10">
        {data.data.map((p) => (
          <QuizCart key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
