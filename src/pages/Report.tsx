import { Avatar, Stack } from "rsuite";
import { GiOldMicrophone } from "react-icons/gi";
import { AiFillCamera } from "react-icons/ai";
import { MdReport } from "react-icons/md";

import {
  BigImageWrapper,
  Column16,
  NeedleWrapper,
  PageWrapper,
} from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import { Chart } from "../_shared/components/chats/Chart";
import { chartData } from "../_shared/components/data";
import ActiveShape from "../_shared/components/chats/ActiveShape";
import Needle from "../_shared/components/chats/Needle";
import Bar from "../_shared/components/chats/Bar";
import BottomCard from "../_shared/components/BottomCard";

export default function Report() {
  return (
    <PageWrapper>
      <Bread name="Report" />
      <Column16>
        <Stack spacing={16}>
          <Stack.Item flex={2}>
            <Card
              title="Live Sound Recording"
              children={
                <Chart
                  data={chartData}
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
                  <div style={{ marginTop: "-12px" }}>
                    <ActiveShape />
                  </div>
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
                  <Bar />
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
                  <NeedleWrapper>
                    <Needle />
                  </NeedleWrapper>
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
