import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);
