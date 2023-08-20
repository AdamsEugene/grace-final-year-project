import { Avatar, Stack } from "rsuite";
import {
  BigImageWrapper,
  Column16,
  PageWrapper,
} from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import { Chart } from "../_shared/components/Chart";
import { chartData } from "../_shared/components/data";

export default function Report() {
  return (
    <PageWrapper>
      <Bread name="Report" />
      <Column16>
        <Stack spacing={16}>
          <Stack.Item flex={2}>
            <Card
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
              children={
                <BigImageWrapper>
                  <Avatar
                    src="https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ce3cfef0e202437d9eed017f6c149913?v=854baeac"
                    alt="@superman66"
                    style={{ height: "450px", width: "100%" }}
                  />
                </BigImageWrapper>
              }
              style={{ height: "55vh" }}
            />
          </Stack.Item>
        </Stack>
        <Stack spacing={16}>
          <Stack.Item flex={1}>
            <Card style={{ height: "28vh" }} />
          </Stack.Item>
          <Stack.Item flex={1}>
            <Card style={{ height: "28vh" }} />
          </Stack.Item>
          <Stack.Item flex={1}>
            <Card style={{ height: "28vh" }} />
          </Stack.Item>
        </Stack>
      </Column16>
    </PageWrapper>
  );
}
