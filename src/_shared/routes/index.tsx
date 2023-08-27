import { PropsWithChildren } from "react";
import { createHashRouter, useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import Report from "../../pages/Report";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Sound from "../../pages/Sound";
import Image from "../../pages/Image";
import Summary from "../../pages/Summary";
import Settings from "../../pages/Settings";
import ReportOutlet from "../../pages/ReportOutlet";
import { IsLogin } from "../services/authCheck";

// eslint-disable-next-line react-refresh/only-export-components
const CheckRoute = (props: PropsWithChildren) => {
  const { isIn } = IsLogin();

  return isIn ? props.children : <Login />;
};

// eslint-disable-next-line react-refresh/only-export-components
const Back = (props: PropsWithChildren) => {
  const { children } = props;
  const navigate = useNavigate();

  const { isIn } = IsLogin();
  if (isIn) navigate("/");
  return children;
};

const router = createHashRouter([
  {
    path: "/",
    element: <CheckRoute children={<Home />} />,
  },
  {
    path: "report",
    element: <CheckRoute children={<ReportOutlet />} />,
    children: [
      {
        path: "/report",
        element: <CheckRoute children={<Report />} />,
      },
      {
        path: "sound",
        element: <CheckRoute children={<Sound />} />,
      },
      {
        path: "image",
        element: <CheckRoute children={<Image />} />,
      },
      {
        path: "summary",
        element: <CheckRoute children={<Summary />} />,
      },
    ],
  },
  {
    path: "settings",
    element: <CheckRoute children={<Settings />} />,
  },
  {
    path: "login",
    element: <Back children={<Login />} />,
  },
  {
    path: "signup",
    element: <Back children={<Signup />} />,
  },
]);

export default router;
