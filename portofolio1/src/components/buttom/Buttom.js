import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import TabItem from "../tabButtom/tabButtom";

const Buttom = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.contaierButton}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default Buttom;

const styles = StyleSheet.create({
  contaierButton: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    height: 77,
    width: 414,
    // paddingHorizontal: 59,
    alignSelf: "center",
  },
});
