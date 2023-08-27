/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, PropsWithChildren } from "react";
import { DateRangePicker, Panel, Stack } from "rsuite";

interface Props {
  title?: string;
  style?: CSSProperties;
  handleDataChange?: (value: any) => void;
}

export default function Card(props: PropsWithChildren<Props>) {
  const { children, style, title, handleDataChange } = props;

  return (
    <Panel
      bordered
      header={<Header title={title} handleDataChange={handleDataChange} />}
      style={style}
    >
      {children}
    </Panel>
  );
}

const Header = ({ handleDataChange, title }: Props) => (
  <Stack spacing={16} justifyContent="space-between">
    <Stack.Item>
      <h4>{title || "Card title"}</h4>
    </Stack.Item>
    {handleDataChange ? (
      <Stack.Item>
        <DateRangePicker
          format="yyyy-MM-dd HH:mm:ss"
          defaultCalendarValue={[new Date(), new Date()]}
          onChange={handleDataChange}
          placement="auto"
        />
      </Stack.Item>
    ) : null}
  </Stack>
);
