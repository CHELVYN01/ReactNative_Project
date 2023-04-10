import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { WARNA_PRIMER, WARNA_SEKUNDER } from "../../utils/constan";
import {
  iconakun,
  iconakunActive,
  iconhome,
  iconhomeActive,
  iconpesan,
  iconpesanActive,
} from "../../assets/asset";

const tabButtom = ({ label, isFocused, onPress, onLongPress }) => {
  const Icon = () => {
    if (label === "Home")
      return isFocused ? (
        <Image source={iconhomeActive} />
      ) : (
        <Image source={iconhome} />
      );
    if (label === "Pesan")
      return isFocused ? (
        <Image source={iconpesanActive} />
      ) : (
        <Image source={iconpesan} />
      );
    if (label === "Akun")
      return isFocused ? (
        <Image source={iconakunActive} />
      ) : (
        <Image source={iconakun} />
      );

    return <Image source={iconhomeActive} />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.item}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default tabButtom;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_PRIMER : WARNA_SEKUNDER,
    marginTop: 5,
  }),
});
