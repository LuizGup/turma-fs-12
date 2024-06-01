import ReactDOM from "react-dom/client";

import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/Usuarios";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/usuarios",
//     element: <Usuarios />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Hello world!</div>} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>
);
