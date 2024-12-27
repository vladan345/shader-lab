import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Simple from "./pages/simple/Simple.jsx";
import BlackWhite from "./pages/black-white/BlackWhite.jsx";
import Layout from "./components/Layout.jsx";

import "./index.css";
import Shockwave from "./pages/shockwave/Shockwave.jsx";
import Morph from "./pages/morph/Morph.jsx";
import Dithering from "./pages/dithering/Dithering.jsx";
import BookOfShader from "./pages/book-of-shader/BookOfShader.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         { path: "/", element: <App /> },
         { path: "/simple", element: <Simple /> },
         { path: "/black-white", element: <BlackWhite /> },
         { path: "/shockwave", element: <Shockwave /> },
         { path: "/morph", element: <Morph /> },
         { path: "/dithering", element: <Dithering /> },
         { path: "/book-of-shader", element: <BookOfShader /> },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
