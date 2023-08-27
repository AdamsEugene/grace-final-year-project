/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import moment from "moment/moment";

const styles = StyleSheet.create({
  body: {
    padding: 30,
    width: "100%",
  },
  table: {
    // @ts-ignore
    display: "table",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "27%",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColDate: {
    width: "36%",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColId: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 10,
    color: "#444",
  },
  header: {
    marginBottom: 20,
    textAlign: "center", // Center the header text
  },
  space: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    gap: 16,
    marginBottom: 8,
  },
  key: {
    fontSize: 10,
    color: "#444",
    marginRight: 32,
  },
  value: {
    fontSize: 10,
    color: "#1b1919",
    fontWeight: "bold",
  },
});

export default function PDF({ data, info }: { data: any; info: any }) {
  const newData = data?.map((d: any, i: any) => ({
    ...d,
    id: i,
    remark: d.Decibels >= 80 ? "Failed" : d.Decibels <= 50 ? "Nice" : "Good",
  }));

  return (
    <Document>
      <Page style={styles.body} size="A4">
        <View style={styles.header}>
          <Text style={styles.headerText}>Report Overview</Text>
          <Text style={styles.space}>
            <Text style={styles.key}>Date &nbsp;&nbsp;</Text>
            <Text style={styles.value}>
              {moment(Date.now()).format("MMM Do YY")}
            </Text>
          </Text>
          <Text style={styles.space}>
            <Text style={styles.key}>Average Decibel &nbsp;&nbsp;:</Text>
            <Text style={styles.value}>{info.averageDecibels}</Text>
          </Text>
          <Text style={styles.space}>
            <Text style={styles.key}>Minimum Decibel &nbsp;&nbsp;:</Text>
            <Text style={styles.value}>{info.minDecibels}</Text>
          </Text>
          <Text style={styles.space}>
            <Text style={styles.key}>Maximum Decibel &nbsp;&nbsp;:</Text>
            <Text style={styles.value}>{info.maxDecibels}</Text>
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColId}>
              <Text style={styles.tableCell}>ID</Text>
            </View>
            <View style={styles.tableColDate}>
              <Text style={styles.tableCell}>DATE</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>VALUE</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>REMARKS</Text>
            </View>
          </View>
          {newData.map((row: any) => (
            <View key={row.id} style={styles.tableRow}>
              <View style={styles.tableColId}>
                <Text style={styles.tableCell}>{row.id}</Text>
              </View>
              <View style={styles.tableColDate}>
                <Text style={styles.tableCell}>{row.timestamp}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.Decibels}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row.remark}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
