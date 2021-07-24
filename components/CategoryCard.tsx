import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

interface ICategoryCard {
  containerStyle: ViewStyle;
  item: any;
  onPress?: () => void;
}

export const CategoryCard = (props: ICategoryCard) => {
  const { containerStyle, item, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { ...containerStyle }]}
    >
      <Image source={item.image} resizeMode="cover" style={styles.itemImage} />
      <View style={styles.itemDetail}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemServing}>
          {item.duration} | {item.serving} serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  itemDetail: {
    width: "65%",
    paddingHorizontal: 20,
  },
  itemName: { flex: 1, ...FONTS.h2 },
  itemServing: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
