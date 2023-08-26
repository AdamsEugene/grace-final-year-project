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
                        The sound levels recorded have consistently remained within the established baseline, reflecting the absence of 
                        any unusual or anomalous sounds that could be associated with illegal mining or any unauthorized activities. 
                        This reassuring outcome is a testament to the effectiveness of our state-of-the-art monitoring technolo

                      </ContentText>
                    ) : type === "green" ? (
                      <ContentText>
                        While the acoustic readings are not indicating an alarming or critical situation, 
                        the moderate activity recorded suggests a heightened presence of sound sources within the monitored region. This could potentially be attributed to various factors,
                         such as natural phenomena or non-threatening human activities.
                      </ContentText>
                    ) : (
                      <ContentText>
                        This critical acoustic activity is indicative of potentially harmful and unlawful activities, 
                        possibly related to illegal mining operations.The readings from our advanced microphone
                         technology have registered an alarming level of sound that requires immediate attention and action.


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
