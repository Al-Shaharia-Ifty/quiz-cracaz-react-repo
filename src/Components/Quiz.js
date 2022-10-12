import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQus from "./QuizQus";

const Quiz = () => {
  const data = useLoaderData();
  const { total, name, logo, questions } = data.data;

  return (
    <div>
      <div className="mt-10 flex justify-center items-center">
        <img className="w-16 bg-gray-200 rounded-lg" src={logo} alt="" />
        <h1 className="text-2xl mx-10">Quiz of {name}</h1>
        <p>total quiz : {total}</p>
      </div>
      <div className="mt-10">
        {questions.map((p, index) => (
          <QuizQus key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
