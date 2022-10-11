import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Quiz from "./Components/Quiz";

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
      {
        path: "quiz/:id",
        element: <Quiz />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
