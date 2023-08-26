import { Stack } from "rsuite";
import {
  Column16,
  ContentText,
  HeaderText,
  NeedleWrapper,
  PageWrapper,
} from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import BottomCard from "../_shared/components/BottomCard";
import { MdReport } from "react-icons/md";
import Needle from "../_shared/components/chats/Needle";
import ReportView from "../_shared/components/ReportView";
import { useState } from "react";

type ContentType = "red" | "blue" | "green";

export default function Summary() {
  const [type, setType] = useState<ContentType>("red");

  console.log(setType);

  return (
    <PageWrapper>
      <Bread name="Summary" />
      <Stack spacing={16} alignItems="flex-start">
        <Stack.Item flex={1}>
          <Column16>
            <Stack.Item style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title="Inference"
                children={
                  <BottomCard Icon={MdReport}>
                    <NeedleWrapper>
                      <Needle />
                    </NeedleWrapper>
                  </BottomCard>
                }
                style={{ height: "28vh", width: "80%" }}
              />
            </Stack.Item>
            <Stack.Item>
              <Card
                title="Summary"
                children={
                  <Column16>
                    <HeaderText>Header</HeaderText>
                    {type === "blue" ? (
                      <ContentText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo corporis quibusdam recusandae vero eum
                        distinctio nulla facilis ullam, neque laborum repellat
                        deleniti beatae in eos commodi vel omnis, totam nemo?
                      </ContentText>
                    ) : type === "green" ? (
                      <ContentText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo corporis quibusdam recusandae vero eum
                        distinctio nulla facilis ullam, neque laborum repellat
                        deleniti beatae in eos commodi vel omnis, totam nemo?
                      </ContentText>
                    ) : (
                      <ContentText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo corporis quibusdam recusandae vero eum
                        distinctio nulla facilis ullam, neque laborum repellat
                        deleniti beatae in eos commodi vel omnis, totam nemo?
                      </ContentText>
                    )}
                  </Column16>
                }
                style={{ height: "55.4vh", width: "100%" }}
              />
            </Stack.Item>
          </Column16>
        </Stack.Item>
        <Stack.Item flex={1}>
          <Card
            title="Report"
            children={<ReportView />}
            style={{ height: "85vh" }}
          />
        </Stack.Item>
      </Stack>
    </PageWrapper>
  );
}
