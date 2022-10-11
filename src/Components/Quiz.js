import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const data = useLoaderData();
  const { total, name, logo, questions, correctAnswer } = data.data;

  const handleSubmit = (e) => {
    const select = e.target.id;
    console.log(select);
  };
  return (
    <div>
      <div className="mt-10 flex justify-center items-center">
        <img className="w-16 bg-gray-200 rounded-lg" src={logo} alt="" />
        <h1 className="text-2xl mx-10">{name}</h1>
        <p>total quiz : {total}</p>
      </div>
      <div className="mt-10">
        {questions.map((p, index) => (
          <div key={index} className="border-2 p-3 mx-20 my-5 rounded-lg">
            <h2>
              Question: <span className="font-medium">{p.question}</span>
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 mt-5">
              {p.options.map((o, index) => (
                <label htmlFor={o} key={index}>
                  <p
                    className="bg-teal-200 p-2 rounded-lg m-2 flex"
                    onClick={handleSubmit}
                  >
                    <input className="mr-3" type="radio" name="quiz" id={o} />
                    {o}
                  </p>
                </label>
              ))}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
