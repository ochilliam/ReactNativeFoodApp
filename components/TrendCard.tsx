import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import type { ViewStyle } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { BlurView } from "expo-blur";

interface ITrendCardProps {
  containerStyle: ViewStyle;
  item: any;
  onPress: () => void;
}

const TrenCardDetail = ({ item }: { item: any }) => {
  return (
    <BlurView style={styles.trendCardDetailBlurView} tint="dark">
      <View style={styles.trendCardDetailContainer}>
        <View style={styles.trendCardDetailInfoContainer}>
          <Text style={styles.trendCardDetail}>{item.name}</Text>
          <Image
            style={styles.trendCardDetialBookmarkIcon}
            source={item.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          />
        </View>
        <Text style={styles.trendCardDetailMoreInfo}>
          {item.duration} | {item.serving} Serving
        </Text>
      </View>
    </BlurView>
  );
};

export const TrendCard = (props: ITrendCardProps) => {
  const { containerStyle, item, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { ...containerStyle }]}
    >
      <Image source={item.image} resizeMode="cover" style={styles.image} />
      <View style={styles.imageCategory}>
        <Text style={styles.imageCategoryText}>{item.category}</Text>
      </View>
      <TrenCardDetail item={item} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: SIZES.radius,
  },
  imageCategory: {
    position: "absolute",
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
  imageCategoryText: {
    color: COLORS.white,
    ...FONTS.h4,
  },
  trendCardDetailBlurView: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
  trendCardDetailContainer: {
    flex: 1,
  },
  trendCardDetailInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  trendCardDetail: {
    width: "80%",
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
  },
  trendCardDetialBookmarkIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
    tintColor: COLORS.darkGreen,
  },
  trendCardDetailMoreInfo: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
});
