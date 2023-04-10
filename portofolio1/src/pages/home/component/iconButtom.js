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
import { iconbill1, iconoutcome } from "../../../assets/asset";
import { WARNA_SEKUNDER_ICON } from "../../../utils/constan";
import { TitilliumWebRegular, TitilliumWebBold } from "../../../assets/asset";

const iconButtom = ({ title }) => {
  function Icon() {
    if (title === "Add Saldo") return <Image source={iconbill1} />;
    if (title === "Get Point") return <Image source={iconoutcome} />;

    return <Image source={iconbill1} />;
  }
  const [loaded] = useFonts({
    TitilliumWebRegular,
    TitilliumWebBold,
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity>
      <View style={styles.biil}>
        <Icon />
      </View>
      <Text style={styles.outcome}>{title}</Text>
    </TouchableOpacity>
  );
};

export default iconButtom;

const styles = StyleSheet.create({
  biil: {
    backgroundColor: WARNA_SEKUNDER_ICON,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 5,
  },
  outcome: {
    fontSize: 10,
    fontFamily: "TitilliumWebRegular",
    textAlign: "center",
  },
});
