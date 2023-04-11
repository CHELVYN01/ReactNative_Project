// export { useFonts } from "@expo-google-fonts/titillium-web";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { imageHeader, imagelogo } from "../../assets/Image/src/image";
import { useFonts } from "expo-font";
import { TitilliumWebRegular, TitilliumWebBold } from "../../assets/asset";
import Saldo from "./component/saldo";
import IconButtom from "./component/iconButtom";
import { WARNA_SEKUNDER_PESANAN } from "../../utils/constan";
import Pesanan from "./component/Pesanan";

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={imageHeader} style={styles.homeHeader}>
          <Image source={imagelogo} style={styles.logo} />
          <View style={styles.text}>
            <Text style={styles.helo}>Selamat Datang,</Text>
            <Text style={styles.user}>Chelvyn Kleden</Text>
          </View>
          <Saldo />
        </ImageBackground>
        <View style={styles.layanan}>
          <Text style={styles.textLayanan}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <IconButtom title="Kiloan" type="layanan" />
            <IconButtom title="Satuan" type="layanan" />
            <IconButtom title="VIP" type="layanan" />
            <IconButtom title="Karpet" type="layanan" />
            <IconButtom title="Strika Saja" type="layanan" />
            <IconButtom title="Ekspress" type="layanan" />
          </View>
        </View>
        <View style={styles.containerPesanan}>
          <Text style={styles.textPesanan}>Pesanan Active</Text>
          <Pesanan title="Pesanan No. 0002142" status="Sudah selesai" />
          <Pesanan title="Pesanan No. 0002142" status="Masih dicuci" />
          <Pesanan title="Pesanan No. 0002142" status="Sudah selesai" />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const windowsWidht = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pageHome: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  homeHeader: {
    // width: windowsWidht,
    height: windowsHeight * 0.38,
    marginTop: windowsHeight * -0.05,
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
  layanan: {
    top: windowsHeight * 0.05,
    left: windowsWidht * 0.1,
    // fontFamil: "TitilliumWebBold",
  },
  textLayanan: {
    fontFamily: "TitilliumWebBold",
    fontSize: 18,
  },
  iconLayanan: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "center",
    // paddingLeft: windowsHeight * 0.003,
    paddingRight: windowsWidht * 0.12,
    marginTop: 20,
    flexWrap: "wrap",
    // marginBottom: 100,
  },
  containerPesanan: {
    marginTop: windowsHeight * 0.05,
    backgroundColor: WARNA_SEKUNDER_PESANAN,
    paddingLeft: windowsWidht * 0.1,
    paddingTop: windowsHeight * 0.016,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textPesanan: {
    fontFamily: "TitilliumWebBold",
    fontSize: 18,
    // marginBottom: windowsHeight * 0.021,
  },
});
