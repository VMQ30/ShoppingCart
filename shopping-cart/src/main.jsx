import { StrictMode } from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { App } from "./App.jsx";
import { Home } from "./routes/Home.jsx";
import { Shop } from "./routes/Shop.jsx";
import { Products } from "./routes/Products.jsx";
import { Contact } from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [
          { index: true, element: <Home /> },
          { path: "cart", element: <Shop /> },
          { path: "products", element: <Products /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
