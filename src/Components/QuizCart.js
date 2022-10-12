import React from "react";
import { Link } from "react-router-dom";

const QuizCart = ({ p }) => {
  const { id, name, logo, total } = p;
  return (
    <div className="card h-80 bg-gray-200 shadow-xl">
      <figure>
        <img src={logo} className="w-40" alt="Shoes" />
      </figure>
      <div className="card-body bg-base-100">
        <div className="lg:flex block justify-between">
          <h2 className="card-title">{name}</h2>
          <p>Total Quiz: {total}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`../quiz/${id}`}>
            <button className="btn btn-primary">Quiz Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCart;
