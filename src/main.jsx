import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./ components/Error.jsx";
import Home from "./ components/Home.jsx";
import About from "./ components/About.jsx";
import Contact from "./ components/Contact.jsx";

const router = createBrowserRouter([
  // root route
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // children are nested routes with a route
      {
        element: <Home />,
        index: true, // index route does not need any path
      },
      {
        path: "about", // path can be defined relative to the parent path
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
