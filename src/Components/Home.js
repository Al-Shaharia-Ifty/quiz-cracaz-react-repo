import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div>
      <h1>Header</h1>
      <h1>home {data.data.length}</h1>
    </div>
  );
};

export default Home;
