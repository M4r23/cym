import { createBrowserRouter } from "react-router-dom";
import Gallo from "../pages/Gallo/Gallo";
import Buho from "../pages/Buho/Buho";
import Welcome from "../pages/Welcome/Welcome";
import Home from "../pages/home/Home";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/gallo",
    Component: Gallo
  },
  {
    path: "/buho",
    Component: Buho
  },
]);
