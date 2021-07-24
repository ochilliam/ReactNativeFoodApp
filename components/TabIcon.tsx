import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants";

interface ITabIconProps {
  focused: boolean;
  icon: any;
}
export const TabIcon = (props: ITabIconProps) => {
  const { focused, icon } = props;
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          { tintColor: focused ? COLORS.darkGreen : COLORS.darkLime },
        ]}
      />
      {focused && <View style={styles.activeIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 50,
  },
  icon: {
    width: 28,
    height: 28,
  },
  activeIcon: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
});
