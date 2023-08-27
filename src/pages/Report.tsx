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
import useImage from "../_shared/hooks/useImage";
import ObjectDetect from "../_shared/components/ObjectDetect";

export default function Report() {
  const { soundData, aggregateSound, handleDataChange, loading } = useSound();

  const { photos, model, predictionModel, loadingImg, getPredictions, result } =
    useImage();

  const _img = document.getElementById("img") as HTMLImageElement;
  if (_img)
    _img.src = `https://tse4.mm.bing.net/th?id=OIP.xSCWDcWUki2Nsq08JJSVigHaE2&pid=Api&P=0&h=180`;

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
                  {!loadingImg ? (
                    <ObjectDetect
                      img={_img}
                      model={model}
                      predictionModel={predictionModel}
                      getPredictions={getPredictions}
                    />
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "440px",
                          width: "100%",
                          zIndex: 99,
                        }}
                      >
                        <Loader
                          size="lg"
                          content="Loading image detection model"
                          vertical
                        />
                      </div>
                      <Avatar
                        src={`data:image/png;base64,${
                          photos[photos.length - 1]
                        }`}
                        alt="@superman66"
                        style={{ height: "440px", width: "100%" }}
                      />
                    </>
                  )}
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
                  {loadingImg ? (
                    <LoadingWrapper>
                      <Loader size="lg" />
                    </LoadingWrapper>
                  ) : (
                    <Bar result={result} />
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
                <BottomCard
                  Icon={MdReport}
                  value={aggregateSound.averageDecibels}
                >
                  {loadingImg ? (
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
      <img id="img" height={400} hidden crossOrigin="anonymous" />
    </PageWrapper>
  );
}
