/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import React from "react";
import {
  AreaChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Placeholder } from "rsuite";
import styled from "styled-components";

interface IData {
  name?: string;
  Decibels: number;
  timestamp: number;
}

interface IProps {
  type: "area" | "line";
  average?: number;
  stroke1: string;
  stroke2: string;
  data: IData[];
  aspect?: number;
  header?: React.ReactNode;
  loading: boolean;
}

const CustomTooltip = (props: any) => {
  if (!props) return <div></div>;
  const { payload } = props;

  return (
    <ToolTipWrapper>
      <MiniTitle>Readings on:</MiniTitle>
      <MiniTitle>
        {moment(payload?.[0]?.payload?.timestamp).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </MiniTitle>
      <MainTitle>
        <Circle bgColor={payload?.[0]?.color} />
        {payload?.[0]?.payload?.Decibels} Decibel
      </MainTitle>
      <MainTitle>
        <Circle bgColor={payload?.[1]?.color} />
        {(props.average as number).toFixed(2)} Average
      </MainTitle>
    </ToolTipWrapper>
  );
};

const FillGradientColor = (stroke1: string, stroke2: string) => (
  <>
    <defs>
      <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="59%" stopColor={stroke1 + "a5"} stopOpacity={0.53} />
        <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="59%" stopColor={stroke2 + "a5"} stopOpacity={0.53} />
        <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  </>
);

export const Chart: React.FC<IProps> = (props) => {
  const { type, stroke1, stroke2, header, data, aspect, average, loading } =
    props;

  const ChatType = type === "area" ? AreaChart : LineChart;
  const ChartLine = type === "area";

  return (
    <ChartWrapper>
      {header}
      <ResponsiveContainer width="100%" aspect={aspect || 9 / 3.8}>
        {loading ? (
          <Placeholder.Graph active />
        ) : (
          <ChatType
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            {FillGradientColor(stroke1, stroke2)}
            <CartesianGrid
              strokeDasharray="10 0"
              y1={10}
              opacity={1}
              stroke="#ECE9F1"
            />
            <XAxis dataKey="timestamp" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip content={<CustomTooltip average={average} />} />
            {ChartLine ? (
              <>
                <Area
                  type="monotone"
                  dataKey="Decibels"
                  stroke={stroke1}
                  strokeWidth={5}
                  fill="url(#colorUv1)"
                />
              </>
            ) : (
              <>
                <Line
                  type="monotone"
                  dataKey="Decibels"
                  stroke={stroke1}
                  strokeWidth={5}
                  fill="url(#colorUv1)"
                />
              </>
            )}
          </ChatType>
        )}
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  color: #131313;
`;

const ToolTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 18px;
  width: 203.43px;
  min-height: 98.83px;
  background: #fcfcfc;
  box-shadow: 0px 7.57809px 7.57809px rgba(50, 50, 71, 0.08),
    0px 7.57809px 15.1562px rgba(50, 50, 71, 0.06);
  border-radius: 20px;
`;

const MiniTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12.57809px;
  line-height: 14px;
  /* text-align: center; */
  color: #131313;
  padding: 0;
  margin: 0 0 4px 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainTitle = styled.h1`
  display: flex;
  gap: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20.8397px;
  line-height: 27px;
  /* text-align: center; */
  color: #131313;
  padding: 0;
  margin: 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Circle = styled.div<{ bgColor: string }>`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background: ${({ bgColor }) => bgColor || "#39f"};
  border: 3.78904px solid #fcfcfc;
  box-shadow: 0px 2.52603px 2.52603px rgba(50, 50, 71, 0.06),
    0px 2.52603px 5.05206px rgba(50, 50, 71, 0.06);
  border-radius: 12px;
`;

// const Months = styled.p`
//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 11.3671px;
//   line-height: 19px;
//   /* text-align: center; */
//   color: #131313;
//   flex: none;
//   order: 2;
//   flex-grow: 0;
//   padding: 0;
//   margin: 0;
// `;
