import { createBrowserRouter } from "react-router-dom";
import Gallo from "../components/Gallo/Gallo";
import Buho from "../components/Buho/Buho";
import Welcome from "../components/Welcome/Welcome";
import Home from "../components/home/Home";

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
