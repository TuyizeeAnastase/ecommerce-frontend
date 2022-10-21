import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "./components/routers/Link";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Link />
  </BrowserRouter>
);
