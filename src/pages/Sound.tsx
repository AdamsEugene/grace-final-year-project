/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageWrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import { Chart } from "../_shared/components/chats/Chart";
import useSound from "../_shared/hooks/useSound";

export default function Sound() {
  const { soundData, aggregateSound, handleDataChange, loading } = useSound();

  return (
    <PageWrapper>
      <Bread name="Sound" />
      <Card
        title="Sound Recordings"
        handleDataChange={handleDataChange}
        children={
          <Chart
            average={aggregateSound.averageDecibels}
            data={soundData}
            loading={loading}
            type="area"
            stroke1="#6A54F5"
            stroke2="#39C272"
            aspect={9 / 4}
          />
        }
        style={{ height: "85vh" }}
      />
    </PageWrapper>
  );
}
// 6A54F5
