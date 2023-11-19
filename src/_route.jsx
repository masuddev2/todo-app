import { createBrowserRouter } from "react-router-dom";
import Error from "./components/ui/Error";
import DeafultLayout from "./layout/DeafultLayout";
import Counters from "./components/counter/Counters";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DeafultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "counter",
        element: <Counters />,
      },
      {
        path: "todo",
        element: <div>Todo</div>,
      },
      {
        path: "service",
        element: <div>service</div>,
      },
      {
        path: "contacts",
        element: <div>Contacts</div>,
      },
      {
        path: "features",
        element: <div>Features</div>,
      },
    ],
  },
]);

export default Router;
