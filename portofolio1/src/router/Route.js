import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Akun, Splash, Pesan } from "../pages/pages";
import { Buttom } from "../components/component";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//fungsi untuk membuat button pada layar
const TabApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <Buttom {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pesan"
        component={Pesan}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

//yang paling teratas akan tampil semua
const Route = () => {
  return (
    // menghlangkan header dengan meggunakan screenOption
    <Stack.Navigator>
      <Stack.Screen
        name="Spalsh"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabApp"
        component={TabApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
