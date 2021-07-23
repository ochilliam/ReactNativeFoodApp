import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Recipe = () => {
  return (
    <View style={styles.container}>
      <Text>Recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Recipe;
