import React from "react";
import { toast } from "react-toastify";

const QuizQus = ({ p }) => {
  const { correctAnswer } = p;

  const handleSubmit = (e) => {
    const select = e.target.id;
    if (correctAnswer === select) {
      toast.success("Wow. Correct Answer");
    } else if (correctAnswer !== select) {
      toast.error("Opss! Wrong Answer");
    }
  };
  return (
    <div className="border-2 p-3 mx-20 my-5 rounded-lg">
      <h2>
        Question: <span className="font-medium">{p.question}</span>
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {p.options.map((o, index) => (
          <label htmlFor={o} key={index}>
            <p className="bg-teal-200 p-2 rounded-lg m-2 flex">
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
    </div>
  );
};

export default QuizQus;
