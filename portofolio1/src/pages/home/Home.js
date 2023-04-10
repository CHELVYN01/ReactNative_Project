// export { useFonts } from "@expo-google-fonts/titillium-web";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { imageHeader, imagelogo } from "../../assets/Image/src/image";
import { useFonts } from "expo-font";
import { TitilliumWebRegular, TitilliumWebBold } from "../../assets/asset";
import Saldo from "./component/saldo";

function Home() {
  const [loaded] = useFonts({
    TitilliumWebRegular,
    TitilliumWebBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.pageHome}>
      <ImageBackground source={imageHeader} style={styles.homeHeader}>
        <Image source={imagelogo} style={styles.logo} />
        <View style={styles.text}>
          <Text style={styles.helo}>Selamat Datang,</Text>
          <Text style={styles.user}>Chelvyn Kleden</Text>
        </View>
        <Saldo />
      </ImageBackground>
    </View>
  );
}

export default Home;

const windowsWidht = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pageHome: {
    flex: 1,
    // backgroundColor: "#000000",
  },
  homeHeader: {
    width: windowsWidht,
    height: windowsHeight * 0.38,
    marginTop: windowsHeight * -0.03,
  },
  logo: {
    width: windowsWidht * 0.3,
    height: windowsHeight * 0.06,
    left: windowsWidht * 0.08,
    top: windowsHeight * 0.08,
  },
  text: {
    paddingTop: 23.72,
    left: windowsWidht * 0.08,
    top: windowsHeight * 0.11,
  },
  helo: {
    fontFamily: "TitilliumWebRegular",
    fontSize: 22,
  },
  user: {
    fontFamily: "TitilliumWebBold",
    fontSize: 16,

    // fontStyle: "",
  },
});
