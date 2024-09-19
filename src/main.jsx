import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Simple from "./pages/simple/Simple.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/simple",
    element: <Simple />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Shader Lab</h1>
    <a href="/">Back to home</a>
    <RouterProvider router={router} />
  </StrictMode>
);
