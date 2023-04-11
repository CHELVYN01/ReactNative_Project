import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { iconMesin } from "../../../assets/asset";
import { useFonts } from "expo-font";
import { TitilliumWebLight, TitilliumWebsemiBold } from "../../../assets/asset";
import { WARNA_PRIMER, WARNA_PRIME_PESANAN } from "../../../utils/constan";

const Pesanan = ({ title, status }) => {
  const [loaded] = useFonts({
    TitilliumWebLight,
    TitilliumWebsemiBold,
  });

  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={iconMesin} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pesanan;

const windowsWidht = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 17,
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
    marginBottom: windowsHeight * 0.01,
    marginRight: windowsWidht * 0.1,
    marginTop: windowsHeight * 0.021,
    paddingLeft: windowsWidht * 0.047,
  },
  text: {
    marginLeft: windowsWidht * 0.04,
  },
  title: {
    fontFamily: "TitilliumWebsemiBold",
    fontSize: 18,
  },
  status: (status) => ({
    fontFamily: "TitilliumWebLight",
    color: status === "Masih dicuci" ? WARNA_PRIME_PESANAN : WARNA_PRIMER,
    fontSize: 14,
  }),
});
