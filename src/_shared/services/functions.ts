/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDataChange = (value: any) => {
  const from = new Date(value[0]).valueOf();
  const to = new Date(value[1]).valueOf();
  //  setDataToRenderNew(
  //    data.filter((d: any) => d.timestamp >= from && d.timestamp <= to)
  //  );

  console.log({ from, to });
};
