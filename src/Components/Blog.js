import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl mt-5 font-medium">Question and Answer</h1>
      <div className="mt-10 mx-10">
        <h2 className="text-4xl text-start">
          What is the purpose of React Router?
        </h2>
        <p className="text-2xl text-justify mt-3">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="mt-10 mx-10">
        <h2 className="text-4xl text-start">How does Context Api works?</h2>
        <p className="text-2xl text-justify mt-3">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="mt-10 mx-10">
        <h2 className="text-4xl text-start">how does useref() work?</h2>
        <p className="text-2xl text-justify mt-3">
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument ( initialValue ). The returned
          object will persist for the full lifetime of the component.
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property.
        </p>
      </div>
    </div>
  );
};

export default Blog;
