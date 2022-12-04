import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";
import "./styles/print.css";

// Root
import Layout from "./components/layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import DoggoPage from "./pages/DoggoPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CheckListPage from "./pages/CheckListPage";
import Loader from "./components/ui/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "doggos/:doggoId",
        element: <DoggoPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "checkList",
        element: <CheckListPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} fallbackElement={<Loader />} />);
