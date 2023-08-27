import { Loader, Stack } from "rsuite";
import {
  AcousticActivityContainer,
  AlertContainer,
  Column16,
  ContentText,
  EnvironmentInfoContainer,
  HeaderText,
  LoadingWrapper,
  NeedleWrapper,
  PageWrapper,
} from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import BottomCard from "../_shared/components/BottomCard";
import { MdReport } from "react-icons/md";
import Needle from "../_shared/components/chats/Needle";
import ReportView from "../_shared/components/ReportView";
import useSound from "../_shared/hooks/useSound";

export default function Summary() {
  const { soundData, aggregateSound, handleDataChange, type, loading } =
    useSound();

  // console.log(setType);

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
                  <BottomCard
                    Icon={MdReport}
                    value={aggregateSound.averageDecibels}
                  >
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
                style={{ height: "28vh", width: "80%" }}
              />
            </Stack.Item>
            <Stack.Item>
              <Card
                title="Executive Summary"
                children={
                  <Column16>
                    <HeaderText>Safe Environmental Condition</HeaderText>
                    {loading ? (
                      <LoadingWrapper>
                        <Loader size="lg" />
                      </LoadingWrapper>
                    ) : (
                      <>
                        {type === "blue" ? (
                          <ContentText>
                            <EnvironmentInfoContainer>
                              <p>
                                We are pleased to inform you that the ongoing
                                monitoring of acoustic readings has indicated a
                                safe and secure environment within the monitored
                                area. Our advanced microphone-based system has
                                diligently captured and analyzed sound data,
                                revealing no signs of alarming or suspicious
                                activities. The sound levels recorded have
                                consistently remained within the established
                                baseline, reflecting the absence of any unusual
                                or anomalous sounds that could be associated
                                with illegal mining or any unauthorized
                                activities.
                              </p>
                              <p>
                                This reassuring outcome is a testament to the
                                effectiveness of our state-of-the-art monitoring
                                technology and its ability to swiftly detect and
                                alert us to potential threats. Our commitment to
                                maintaining the integrity and safety of the
                                monitored area remains steadfast. We will
                                continue to monitor the acoustic landscape with
                                unwavering diligence, ensuring that any
                                deviation from the established safe conditions
                                is promptly detected and addressed.
                              </p>
                            </EnvironmentInfoContainer>
                          </ContentText>
                        ) : type === "green" ? (
                          <ContentText>
                            <AcousticActivityContainer>
                              <header>Moderate Environmental condition</header>
                              <p>
                                We would like to inform you that our vigilant
                                monitoring system has detected moderate acoustic
                                activity within the monitored area of the Atewa
                                forest. Our sophisticated microphone-based
                                technology has been diligently capturing and
                                analyzing sound data, revealing a moderate level
                                of acoustic activity that requires attention.
                                While the acoustic readings are not indicating
                                an alarming or critical situation, the moderate
                                activity recorded suggests a heightened presence
                                of sound sources within the monitored region.
                                This could potentially be attributed to various
                                factors, such as natural phenomena or
                                non-threatening human activities.
                              </p>
                              <p>
                                Our commitment to ensuring the safety and
                                integrity of the forest remains paramount. We
                                are closely monitoring the situation and will
                                continue to assess any developments that might
                                warrant further investigation or action. The
                                proactive nature of our monitoring system
                                empowers us to promptly respond to changing
                                conditions.
                              </p>
                            </AcousticActivityContainer>
                          </ContentText>
                        ) : (
                          <ContentText>
                            <AlertContainer>
                              <header>
                                Urgent Alert: Critical Environmental Condition
                                Detected"
                              </header>
                              <p className="alert-text">
                                We want to urgently bring to your notice that
                                our state-of-the-art monitoring system has
                                detected a critical acoustic activity within the
                                confines of the Atewa forest. The readings from
                                our advanced microphone technology have
                                registered an alarming level of sound that
                                requires immediate attention and action.
                              </p>
                              <p className="alert-text">
                                This critical acoustic activity is indicative of
                                potentially harmful and unlawful activities,
                                possibly related to illegal mining operations.
                                Our monitoring system's sensitivity and accuracy
                                are designed to detect such anomalies promptly,
                                enabling us to respond swiftly to threats that
                                could compromise the forest's integrity.
                              </p>
                              <p className="alert-text">
                                It is imperative that all relevant authorities,
                                personnel, and concerned parties mobilize
                                immediately to address this situation. The
                                preservation of the Atewa forest's natural
                                beauty, biodiversity, and environmental balance
                                is at risk, and swift intervention is necessary
                                to prevent further damage.
                              </p>
                            </AlertContainer>
                            ); export default AlertMessage; You can then use the
                            AlertMessage component in your React application to
                            display the styled alert messages.
                          </ContentText>
                        )}
                      </>
                    )}
                  </Column16>
                }
                style={{ height: "55.4vh", width: "100%", overflowY: "auto" }}
              />
            </Stack.Item>
          </Column16>
        </Stack.Item>
        <Stack.Item flex={1}>
          <Card
            title="Report"
            handleDataChange={handleDataChange}
            children={
              <ReportView
                soundData={soundData}
                aggregateSound={aggregateSound}
              />
            }
            style={{ height: "85vh" }}
          />
        </Stack.Item>
      </Stack>
    </PageWrapper>
  );
}
