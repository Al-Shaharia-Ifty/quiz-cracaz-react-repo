import React from "react";
import { Link } from "react-router-dom";

const QuizCart = ({ p }) => {
  const { id, name, logo, total } = p;
  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p>Total : {total}</p>
        <div className="card-actions justify-end">
          <Link to={`../quiz/${id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCart;
