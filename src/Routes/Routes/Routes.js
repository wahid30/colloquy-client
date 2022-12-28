import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Details from "../../pages/Home/Details/Details";
import FirstSection from "../../pages/Home/FirstSection/FirstSection";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/Login/Login/Login";
import Register from "../../pages/Home/Login/Register/Register";
import Media from "../../pages/Home/Media/Media";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/firstSection",
        element: (
          <PrivateRoute>
            <FirstSection></FirstSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/colloquyUser/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://colloquy-server.vercel.app/colloquyUser/${params.id}`
          );
        },
      },
    ],
  },
]);
