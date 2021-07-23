import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from "react-native";
import { COLORS, FONTS } from "../constants";

interface IButton {
  text: string;
  containerStyle: ViewStyle;
  colors: string[];
  onPress: () => void;
}

export const Button = (props: IButton) => {
  const { colors, containerStyle, onPress, text } = props;
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={{ ...containerStyle }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
        >
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: COLORS.white,
    ...FONTS.h3,
  },
});
