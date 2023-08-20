import { createHashRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Report from "../../pages/Report";
import Export from "../../pages/Export";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "report",
    element: <Report />,
  },
  {
    path: "export",
    element: <Export />,
    // loader: ({ request }) =>
    //   fetch("/api/dashboard.json", {
    //     signal: request.signal,
    //   }),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
