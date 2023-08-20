import { Wrapper } from "../_shared/components/@styles";
import Sidebar from "../_shared/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function ReportOutlet() {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}
