import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Gallo from "../components/Gallo/Gallo";
import Buho from "../components/Buho/Buho";

export let router = createBrowserRouter([
  {
    path: "/",
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
