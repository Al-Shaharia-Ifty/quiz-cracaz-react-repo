import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Main from "./Components/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
