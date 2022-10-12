import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCart from "./QuizCart";
import img from "../Assets/quiz.jpg";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="mt-10 mx-20 flex">
        <img className="w-[200px]" src={img} alt="" />
        <h1 className="text-2xl text-justify my-10 md:mx-20 mx-10">
          This Website is only for Programmers. How can check there knowledge
          about programming in this page. Best of Luck
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-10 md:mx-20 mt-10">
        {data.data.map((p) => (
          <QuizCart key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
