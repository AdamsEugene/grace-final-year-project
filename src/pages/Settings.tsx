import { PageWrapper, Wrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Sidebar from "../_shared/components/Sidebar";

export default function Settings() {
  return (
    <Wrapper>
      <Sidebar />
      <PageWrapper>
        <Bread name="Settings" />
        Settings
      </PageWrapper>
    </Wrapper>
  );
}
