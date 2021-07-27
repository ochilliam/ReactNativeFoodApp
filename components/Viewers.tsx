import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { v4 as uuid } from "uuid";
import { COLORS, FONTS } from "../constants";

interface IViewersProps {
  viewerList: any[];
}
export const Viewers = (props: IViewersProps) => {
  const { viewerList } = props;

  if (viewerList?.length === 0) {
    return (
      <View style={styles.viewerNewContainer}>
        <Text style={styles.viewerNew}>Be the first to try it!</Text>
      </View>
    );
  }

  if (viewerList?.length <= 4) {
    return (
      <View>
        <View style={styles.viewerAvatarContainer}>
          {viewerList?.map((item, index) => (
            <View
              style={[
                styles.viewerAvatar,
                { marginLeft: index === 0 ? 0 : -20 },
              ]}
              key={String(item?.id ?? uuid())}
            >
              <Image
                resizeMode="cover"
                source={item?.profilePic}
                style={styles.viewerAvatarImage}
              />
            </View>
          ))}
        </View>
        <Text style={styles.viewerInfo}>{viewerList?.length} people</Text>
        <Text style={styles.viewerInfoSub}>Already tried it!</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.viewerProfile}>
        {viewerList?.map((item, index) => {
          if (index <= 2) {
            return (
              <View
                key={String(item?.id ?? uuid())}
                style={[
                  styles.viewerProfilePicContainer,
                  { marginLeft: index === 0 ? 0 : -20 },
                ]}
              >
                <Image
                  source={item?.profilePic}
                  resizeMode="cover"
                  style={styles.viewerProfilePic}
                />
              </View>
            );
          }
          if (index === 3) {
            return (
              <View key={String(item?.id ?? uuid())} style={styles.viewerMore}>
                <Text style={styles.viewerMoreText}>
                  {viewerList?.length - 3}+
                </Text>
              </View>
            );
          }
        })}
      </View>

      <Text style={styles.viewerInfo}>{viewerList?.length} people</Text>
      <Text style={styles.viewerInfoSub}>Already tried it!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewerNewContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewerNew: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  viewerAvatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  viewerAvatar: {
    height: 50,
    width: 50,
  },
  viewerAvatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewerInfo: {
    color: COLORS.lightGray2,
    textAlign: "right",
    ...FONTS.body4,
    lineHeight: 18,
  },
  viewerInfoSub: {
    color: COLORS.lightGray2,
    textAlign: "right",
    ...FONTS.body4,
    lineHeight: 18,
  },
  viewerProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  viewerProfilePicContainer: {
    width: 50,
    height: 50,
  },
  viewerProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewerMore: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -20,
    borderRadius: 25,
    backgroundColor: COLORS.darkGreen,
  },
  viewerMoreText: {
    color: COLORS.white,
    ...FONTS.body4,
  },
});
