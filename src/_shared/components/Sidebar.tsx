/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sidenav, Nav, toaster, Message } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import ExitIcon from "@rsuite/icons/Exit";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/fireBase";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    navigate(path);
  };

  const message = (message: string, type: any) => {
    return (
      <Message showIcon type={type} closable>
        {message}
      </Message>
    );
  };

  const _signOut = () => {
    auth.currentUser &&
      signOut(auth)
        .then(() => {
          navigate("/login", { replace: true });
        })
        .catch((error) => {
          toaster.push(message("Unable to log out. Try again later", "error"), {
            placement: "topEnd",
            duration: 5000,
          });
          console.log(error);
        });
  };

  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={["3"]} style={{ height: "100vh", width: 240 }}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item
              eventKey="1"
              icon={<DashboardIcon />}
              onClick={() => goto("/")}
            >
              Home
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Report" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1" onClick={() => goto("/report")}>
                Overview
              </Nav.Item>
              <Nav.Item eventKey="3-2" onClick={() => goto("/report/sound")}>
                Sound
              </Nav.Item>
              <Nav.Item eventKey="3-3" onClick={() => goto("/report/image")}>
                Image
              </Nav.Item>
              <Nav.Item eventKey="3-4" onClick={() => goto("/report/summary")}>
                Summary
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1" onClick={() => goto("/settings")}>
                User
              </Nav.Item>
              <Nav.Item eventKey="4-2" icon={<ExitIcon />} onClick={_signOut}>
                Logout
              </Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
