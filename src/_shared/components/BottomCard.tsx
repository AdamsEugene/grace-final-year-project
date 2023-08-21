/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from "react";
import { BottomCardIcon, BottomCardWrapper } from "./@styles";

interface Props {
  Icon?: any;
}

export default function BottomCard(props: PropsWithChildren<Props>) {
  const { children, Icon } = props;
  return (
    <BottomCardWrapper>
      {Icon ? (
        <BottomCardIcon>
          <Icon fontSize="5em" />
        </BottomCardIcon>
      ) : null}
      {children}
    </BottomCardWrapper>
  );
}
