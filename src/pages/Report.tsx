import { Avatar, Loader, Stack } from "rsuite";
import { GiOldMicrophone } from "react-icons/gi";
import { AiFillCamera } from "react-icons/ai";
import { MdReport } from "react-icons/md";

import {
  BigImageWrapper,
  Column16,
  LoadingWrapper,
  NeedleWrapper,
  PageWrapper,
} from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import { Chart } from "../_shared/components/chats/Chart";
import ActiveShape from "../_shared/components/chats/ActiveShape";
import Needle from "../_shared/components/chats/Needle";
import Bar from "../_shared/components/chats/Bar";
import BottomCard from "../_shared/components/BottomCard";
import useSound from "../_shared/hooks/useSound";

export default function Report() {
  const { soundData, aggregateSound, handleDataChange, loading } = useSound();

  return (
    <PageWrapper>
      <Bread name="Report" />
      <Column16>
        <Stack spacing={16}>
          <Stack.Item flex={2}>
            <Card
              title="Live Sound Recording"
              handleDataChange={handleDataChange}
              children={
                <Chart
                  average={aggregateSound.averageDecibels}
                  data={soundData}
                  loading={loading}
                  type="area"
                  stroke1="#39C272"
                  stroke2="#6A54F5"
                />
              }
              style={{ height: "55vh" }}
            />
          </Stack.Item>
          <Stack.Item flex={1}>
            <Card
              title="Live Video Recording"
              children={
                <BigImageWrapper>
                  <Avatar
                    src="https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ce3cfef0e202437d9eed017f6c149913?v=854baeac"
                    alt="@superman66"
                    style={{ height: "440px", width: "100%" }}
                  />
                </BigImageWrapper>
              }
              style={{ height: "55vh" }}
            />
          </Stack.Item>
        </Stack>
        <Stack spacing={16}>
          <Stack.Item flex={1}>
            <Card
              title="Sound"
              children={
                <BottomCard Icon={GiOldMicrophone}>
                  {loading ? (
                    <LoadingWrapper>
                      <Loader size="lg" />
                    </LoadingWrapper>
                  ) : (
                    <div style={{ marginTop: "-12px" }}>
                      <ActiveShape {...aggregateSound} />
                    </div>
                  )}
                </BottomCard>
              }
              style={{ height: "28vh" }}
            />
          </Stack.Item>
          <Stack.Item flex={1}>
            <Card
              title="Image"
              children={
                <BottomCard Icon={AiFillCamera}>
                  {loading ? (
                    <LoadingWrapper>
                      <Loader size="lg" />
                    </LoadingWrapper>
                  ) : (
                    <Bar />
                  )}
                </BottomCard>
              }
              style={{ height: "28vh" }}
            />
          </Stack.Item>
          <Stack.Item flex={1}>
            <Card
              title="Inference"
              children={
                <BottomCard Icon={MdReport}>
                  {loading ? (
                    <LoadingWrapper>
                      <Loader size="lg" />
                    </LoadingWrapper>
                  ) : (
                    <NeedleWrapper>
                      <Needle value={aggregateSound.averageDecibels} />
                    </NeedleWrapper>
                  )}
                </BottomCard>
              }
              style={{ height: "28vh" }}
            />
          </Stack.Item>
        </Stack>
      </Column16>
    </PageWrapper>
  );
}
