import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiEye } from "react-icons/fi";

const QuizQus = ({ p }) => {
  const { correctAnswer } = p;
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    const select = e.target.id;
    if (correctAnswer === select) {
      toast.success("Wow. Correct Answer");
    } else if (correctAnswer !== select) {
      toast.error("Opss! Wrong Answer");
    }
  };
  const showAnswer = () => {
    // toast(correctAnswer);
    if (answer) {
      setAnswer("");
    } else {
      setAnswer(correctAnswer);
    }
  };
  return (
    <div className="border-2 p-3 lg:mx-20 my-5 rounded-lg">
      <div className="flex justify-between">
        <h2>
          Question: <span className="font-medium">{p.question}</span>
        </h2>
        <FiEye onClick={showAnswer} />
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {p.options.map((o, index) => (
          <label htmlFor={o} key={index}>
            <p className="hover:bg-teal-200 border-2 p-2 rounded-lg m-2 flex">
              <input
                className="mr-3"
                type="radio"
                name="quiz"
                id={o}
                onClick={handleSubmit}
              />
              {o}
            </p>
          </label>
        ))}
      </form>
      {answer ? (
        <p className="text-xl">
          Correct Answer : <span className="text-green-500">{answer}</span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default QuizQus;
