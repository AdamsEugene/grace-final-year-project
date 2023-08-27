/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Panel, FlexboxGrid, Stack, Button } from "rsuite";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Icon } from "@rsuite/icons";
import { Message, useToaster } from "rsuite";

import CustomTable from "./CustomTable";
import { print } from "../services/printService";
import PDF from "./Pdf";
import moment from "moment";
import { Sound } from "../hooks/useSound";

interface Props {
  soundData: Sound[];
  aggregateSound: {
    maxDecibels: number;
    minDecibels: number;
    averageDecibels: number;
  };
}

export default function ReportView({ soundData, aggregateSound }: Props) {
  const toaster = useToaster();

  const message = (
    <Message showIcon type={"success"} closable>
      Generating Report PDF
    </Message>
  );

  console.log(soundData);

  const dataToRender = useMemo(() => {
    return soundData.map((d, i) => ({
      timestamp: moment(d.timestamp).format("MMMM Do YYYY, h:mm:ss a"),
      id: i + 1,
      remark: d.Decibels >= 80 ? "Loud" : d.Decibels >= 50 ? "Okay" : "Low",
      Decibels: d.Decibels,
    }));
  }, [soundData]);

  const onPrint = () => {
    print(<PDF data={dataToRender} info={aggregateSound} />, () =>
      toaster.push(message, { placement: "topEnd", duration: 5000 })
    );
  };

  return (
    <Panel
      header={
        <Stack justifyContent="space-between">
          <Stack spacing={16}></Stack>
          <Button
            color="blue"
            appearance="primary"
            startIcon={<Icon as={AiOutlineFilePdf} />}
            onClick={onPrint}
          >
            Export
          </Button>
        </Stack>
      }
    >
      <FlexboxGrid justify="center">
        <CustomTable data={dataToRender} />
      </FlexboxGrid>
    </Panel>
  );
}
