import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { carrouselData } from "./data";

export default function CustomCarrousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > carrouselData.length - 2) {
      return setIndex(0);
    } else {
      setTimeout(() => {
        setIndex((p) => (p += 1));
      }, 7000);
    }
  }, [index]);

  return (
    <CarrouselContainer
      style={{
        backgroundImage: `url(../src/assets/galaImages/${carrouselData[index].image})`,
        backgroundSize: "cover",
      }}
    >
      <Content>{carrouselData[index].content}</Content>
    </CarrouselContainer>
  );
}

const CarrouselContainer = styled.div`
  margin-top: 15px;
  height: 75vh;
  border-radius: 15px;
  justify-content: center;
  display: flex;
  background-blend-mode: multiply;
  background-color: hsla(
    22.10526315789474,
    88.78504672897198%,
    41.96078431372548%,
    0.926
  );
  transition: all 0.3s ease-in-out;
`;

const Content = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin-top: auto;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
`;
