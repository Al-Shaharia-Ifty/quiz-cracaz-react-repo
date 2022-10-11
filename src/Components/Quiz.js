import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const data = useLoaderData();
  const { total, name, logo, questions } = data.data;

  return (
    <div>
      <div className="mt-10 flex justify-center items-center">
        <img className="w-16 bg-gray-200 rounded-lg" src={logo} alt="" />
        <h1 className="text-2xl mx-10">{name}</h1>
        <p>total quiz : {total}</p>
      </div>
      <div className="mt-10">
        {questions.map((p) => (
          <div className="border-2 p-3 mx-20 my-5 rounded-lg">
            <h2>
              Question: <span className="font-medium">{p.question}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
