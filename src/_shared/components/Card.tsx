import { CSSProperties, PropsWithChildren } from "react";
import { Panel } from "rsuite";

interface Props {
  title?: string;
  style?: CSSProperties;
}

export default function Card(props: PropsWithChildren<Props>) {
  const { children, style, title } = props;

  return (
    <Panel bordered header={<h4>{title || "Card title"}</h4>} style={style}>
      {children}
    </Panel>
  );
}
