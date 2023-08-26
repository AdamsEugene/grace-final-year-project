/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Panel, FlexboxGrid, DateRangePicker, Stack, Button } from "rsuite";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Icon } from "@rsuite/icons";
import { Message, useToaster } from "rsuite";

import CustomTable from "./CustomTable";
import { print } from "../services/printService";
import PDF from "./Pdf";
import { useLocation } from "react-router-dom";
import moment from "moment";

export default function ReportView() {
  const location = useLocation();
  const toaster = useToaster();
  const [data, setData] = React.useState<any[]>([]);
  const [dataToRender, setDataToRender] = React.useState([]);
  const [dataToRenderNew, setDataToRenderNew] = React.useState<any>([]);

  const message = (
    <Message showIcon type={"success"} closable>
      Generating Report PDF
    </Message>
  );

  React.useEffect(() => {
    setData(location.state?.data);
  }, [location.state?.data]);

  React.useEffect(() => {
    setDataToRender(
      (dataToRenderNew || data)?.map((d: any, i: any) => ({
        ...d,
        timestamp: moment(d.timestamp).format("MMMM Do YYYY, h:mm:ss a"),
        id: i + 1,
        remark: d.Decibels >= 80 ? "Loud" : d.Decibels <= "Low" ? "Low" : "Low",
      }))
    );
  }, [data, dataToRenderNew]);

  const onPrint = () => {
    print(<PDF data={dataToRender} />, () =>
      toaster.push(message, { placement: "topEnd", duration: 5000 })
    );
  };

  const handleDataChange = (value: any) => {
    const from = new Date(value[0]).valueOf();
    const to = new Date(value[1]).valueOf();
    setDataToRenderNew(
      data.filter((d: any) => d.timestamp >= from && d.timestamp <= to)
    );
  };

  return (
    <Panel
      header={
        <Stack justifyContent="space-between">
          <Stack spacing={16}>
            <h5>Select Data</h5>
            <DateRangePicker
              format="yyyy-MM-dd HH:mm:ss"
              defaultCalendarValue={[new Date(), new Date()]}
              onChange={handleDataChange}
            />
          </Stack>
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
