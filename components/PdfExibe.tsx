"use client";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

type PdfProp = {
  text: string;
};

function PdfExibe({ text }: PdfProp) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
    },
    title: {
      fontSize: "32px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      margin: "10px",
      color: "red",
    },
    viewer: {
      width: 1080,
      height: 750,
    },
    body: {
      color: "blue",
      fontSize: "16px",
      fontWeight: "bold",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    footer: {
      color: "yellow",
      fontSize: "16px",
      fontWeight: "demibold",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  });

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.title}>
            <Text>Titulo</Text>
          </View>
          <View style={styles.body}>
            <Text>{text}</Text>
          </View>
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PdfExibe;
