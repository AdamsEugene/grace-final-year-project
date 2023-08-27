/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { drawRect } from "../services/draw";

// const known = ["crane", "forklift", "harvester", "reaper", "truck", "person"];

interface Props {
  model: any;
  img: any;
  predictionModel: any;
  long?: boolean;
  getPredictions?: (pre: any[]) => void;
}

export default function ObjectDetect({
  model,
  img,
  predictionModel,
  long,
  getPredictions,
}: Props) {
  const [predictions, setPredictions] = useState<any[]>([]);
  const canvasRef = useRef<any>(null);
  const imgRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setRe] = useState(false);

  useEffect(() => {
    (async () => {
      // Load the model.
      setRe(true);
      if (img) {
        // Classify the image.
        const predictions = await model.detect(img);
        // const rec = await predictionModel.classify(img);
        // setOtherPredictions(rec);
        setPredictions(predictions);
        setTimeout(() => {
          setRe(false);
          getPredictions && getPredictions(predictions);
        }, 1000);
      }
    })();
  }, [getPredictions, img, model, predictionModel]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = img?.width;
      canvasRef.current.height = img?.height;
      const ctx = canvasRef.current.getContext("2d");
      drawRect(predictions, ctx);
    }
  });

  return (
    <ImageWrapper>
      <>
        <img
          id="img"
          src={img?.src}
          height={"100%"}
          width={"100%"}
          ref={imgRef}
          crossOrigin="anonymous"
          style={{ height: long ? "730px" : "440px" }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 8,
            width: "100%",
            height: long ? 730 : 440,
          }}
        />
      </>
      <img id="img" height={long ? 730 : 440} hidden crossOrigin="anonymous" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

//before merging with grace
