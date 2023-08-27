import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
  width: 100vw;
`;

export const PageWrapper = styled.div`
  width: calc(100vw - 64px);
  height: calc(100vh - 64px);
  padding: 32px;
`;

export const Column16 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BigImageWrapper = styled.div`
  position: relative;
  .rs-avatar > .rs-avatar-image {
    height: 100%;
    width: 100%;
  }
`;

export const DivCursor = styled.div`
  cursor: pointer;
`;

export const NeedleWrapper = styled.div`
  margin-top: -84px !important;
  margin-right: -24px;
`;

export const BottomCardWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const BottomCardIcon = styled.div``;

export const CenterPage = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.h4``;

export const ContentText = styled.p``;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-top: 42px;
  margin-right: 42px;
`;

export const EnvironmentInfoContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;

  p {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.6;
  }
`;
export const AcousticActivityContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;

  p {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.6;
  }
`;
export const AlertContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;

  .alert-text {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.6;
  }
`;
