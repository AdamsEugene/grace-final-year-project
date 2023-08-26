import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import ExitIcon from "@rsuite/icons/Exit";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    navigate(path);
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
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
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
                Settings
              </Nav.Item>
              <Nav.Item
                eventKey="4-2"
                icon={<ExitIcon />}
                onClick={() => goto("/logout")}
              >
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
