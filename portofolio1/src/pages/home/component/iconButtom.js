import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import {
  iconBaju,
  iconDeliverTruk,
  iconDress,
  iconLaundry,
  iconNeraca,
  iconStrika,
  iconbill1,
  iconoutcome,
} from "../../../assets/asset";
import { WARNA_SEKUNDER_ICON } from "../../../utils/constan";
import {
  TitilliumWebRegular,
  TitilliumWebBold,
  TitilliumWebLight,
} from "../../../assets/asset";

const iconButtom = ({ title, type }) => {
  function Icon() {
    if (title === "Add Saldo") return <Image source={iconbill1} />;
    if (title === "Get Point") return <Image source={iconoutcome} />;
    if (title === "Kiloan") return <Image source={iconNeraca} />;
    if (title === "Satuan") return <Image source={iconBaju} />;
    if (title === "VIP") return <Image source={iconDress} />;
    if (title === "Karpet") return <Image source={iconLaundry} />;
    if (title === "Strika Saja") return <Image source={iconStrika} />;
    if (title === "Ekspress") return <Image source={iconDeliverTruk} />;

    return <Image source={iconbill1} />;
  }
  const [loaded] = useFonts({
    TitilliumWebRegular,
    TitilliumWebBold,
    TitilliumWebLight,
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.biil(type)}>
        <Icon />
      </View>
      <Text style={styles.outcome(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default iconButtom;

const styles = StyleSheet.create({
  biil: (type) => ({
    backgroundColor: WARNA_SEKUNDER_ICON,
    alignItems: "center",
    justifyContent: "center",
    padding: type === "layanan" ? 12 : 6,
    borderRadius: type === "layanan" ? 10 : 5,
  }),
  outcome: (type) => ({
    paddingTop: type === "layanan" ? 10 : 0,
    fontSize: type === "layanan" ? 14 : 10,
    fontFamily:
      type === "layanan" ? "TitilliumWebLight" : "TitilliumWebRegular",
    textAlign: "center",
  }),
  container: (type) => ({
    marginBottom: type === "layanan" ? 20 : 0,
    marginRight: type === "layanan" ? 30 : 0,
    // paddingLeaft: type === "layanan" ? 30 : 0,
    // justifyContent: "space-evenly",
  }),
});
