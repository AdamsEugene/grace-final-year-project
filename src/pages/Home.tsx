import { PageWrapper, Wrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import CustomCarrousel from "../_shared/components/CustomCarrousel";
import Sidebar from "../_shared/components/Sidebar";

export default function Home() {
  return (
    <Wrapper>
      <Sidebar />
      <PageWrapper>
        <Bread />
        <CustomCarrousel />
      </PageWrapper>
    </Wrapper>
  );
}
