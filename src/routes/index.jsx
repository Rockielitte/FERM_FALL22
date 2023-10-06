import MainLayout from "../layouts/MainLayout";
import Home from "../pages/index";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "details/:slug",
        element: <Detail />,
      },
    ],
  },
]);
