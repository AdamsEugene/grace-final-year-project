import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 32px;
`;

export const Column16 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BigImageWrapper = styled.div`
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
