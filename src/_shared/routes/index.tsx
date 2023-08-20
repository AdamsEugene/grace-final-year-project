import { createHashRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Report from "../../pages/Report";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Sound from "../../pages/Sound";
import Image from "../../pages/Image";
import Summary from "../../pages/Summary";
import Settings from "../../pages/Settings";
import ReportOutlet from "../../pages/ReportOutlet";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "report",
    element: <ReportOutlet />,
    children: [
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "sound",
        element: <Sound />,
      },
      {
        path: "image",
        element: <Image />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
  {
    path: "settings",
    element: <Settings />,
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
