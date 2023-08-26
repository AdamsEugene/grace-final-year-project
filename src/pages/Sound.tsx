import { PageWrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import { Chart } from "../_shared/components/chats/Chart";
import { chartData } from "../_shared/components/data";

export default function Sound() {
  return (
    <PageWrapper>
      <Bread name="Sound" />
      <Card
        title="Sound Recordings"
        children={
          <Chart
            data={chartData}
            type="area"
            stroke1="#39C272"
            stroke2="#6A54F5"
            aspect={9 / 4}
          />
        }
        style={{ height: "85vh" }}
      />
    </PageWrapper>
  );
}
