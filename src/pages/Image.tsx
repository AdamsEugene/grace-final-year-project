import { Avatar, Loader } from "rsuite";
import { BigImageWrapper, PageWrapper } from "../_shared/components/@styles";
import Bread from "../_shared/components/Bread";
import Card from "../_shared/components/Card";
import useImage from "../_shared/hooks/useImage";
import ObjectDetect from "../_shared/components/ObjectDetect";

export default function Image() {
  const { loadingImg, model, predictionModel } = useImage();

  const _img = document.getElementById("img") as HTMLImageElement;
  if (_img)
    _img.src = `https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=`;

  return (
    <PageWrapper>
      <Bread name="Image" />
      <Card
        title="Live Video Recording"
        children={
          <BigImageWrapper>
            {!loadingImg ? (
              <ObjectDetect
                img={_img}
                model={model}
                predictionModel={predictionModel}
                long
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
                    height: "730px",
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
                  src={`https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=`}
                  alt="@superman66"
                  style={{ height: "730px", width: "100%" }}
                />
              </>
            )}
          </BigImageWrapper>
        }
        style={{ height: "85vh" }}
      />
    </PageWrapper>
  );
}
