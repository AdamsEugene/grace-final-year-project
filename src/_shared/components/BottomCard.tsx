/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from "react";
import { BottomCardIcon, BottomCardWrapper, Column16 } from "./@styles";

interface Props {
  Icon?: any;
  value?: number;
}

export default function BottomCard(props: PropsWithChildren<Props>) {
  const { children, Icon, value } = props;
  return (
    <BottomCardWrapper>
      {Icon ? (
        <Column16>
          <BottomCardIcon>
            <Icon fontSize="5em" />
          </BottomCardIcon>
          {value && <h1>{value}</h1>}
        </Column16>
      ) : null}
      {children}
    </BottomCardWrapper>
  );
}
