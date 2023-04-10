import { StyleSheet, Text, Dimensions, View } from "react-native";
import { TitilliumWebRegular, TitilliumWebBold } from "../../../assets/asset";
import { useFonts } from "expo-font";
import React from "react";
import { WARNA_PRIMER, WARNA_SEKUNDER_ICON } from "../../../utils/constan";
import IconButtom from "./iconButtom";

function Gap({ height, width }) {
  return <View style={{ height: height, width: width }} />;
}

const Saldo = () => {
  const [loaded] = useFonts({
    TitilliumWebRegular,
    TitilliumWebBold,
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>Saldo :</Text>
        <Text style={styles.text2}>Antar Poin : </Text>
      </View>
      <View style={styles.point}>
        <Text style={styles.point1}>RP. 1000.000</Text>
        <Text style={styles.point2}>100 Point</Text>
      </View>
      <View style={styles.icon}>
        <IconButtom title="Add Saldo" />
        <Gap width={10} />
        <IconButtom title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

const windowsWidht = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: windowsWidht * 0.8,
    height: windowsHeight * 0.11,
    justifyContent: "center",
    top: windowsHeight * 0.15,
    left: windowsWidht * 0.1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },

  text: {
    // marginLeft: 16,
    justifyContent: "center",
    fontFamily: "TitilliumWebRegular",
  },
  text1: {
    fontSize: 20,
    fontFamily: "TitilliumWebRegular",
  },
  text2: {
    fontSize: 12,
  },
  point: {
    justifyContent: "center",
    fontFamily: "TitilliumWebRegular",
  },
  point1: {
    fontSize: 20,
    fontFamily: "TitilliumWebBold",
  },
  point2: {
    fontFamily: "TitilliumWebBold",
    textAlign: "right",
    color: WARNA_PRIMER,
  },
  icon: {
    flexDirection: "row",
    padding: 8,
  },
});
