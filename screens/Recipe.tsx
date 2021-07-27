import { useNavigation } from "@react-navigation/native";
import BlurView from "expo-blur/build/BlurView";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Viewers } from "../components/Viewers";
import { COLORS, FONTS, icons, SIZES } from "../constants";

interface IRecipeProps {
  navigation: any;
  route: any;
}

const HEADER_HEIGHT = 350;

const RecipeCreatorCardInfo = ({ selectedRecipe }: { selectedRecipe: any }) => {
  const navigation = useNavigation();
  //@ts-expect-error: find out the type issue
  const onProfilePress = () => navigation.navigate("Profile");
  return (
    <BlurView style={styles.headerCardBlur} tint="dark">
      <View style={styles.headerCardDetail}>
        <View style={styles.headerAvatarContainer}>
          <Image
            style={styles.headerAvatar}
            source={selectedRecipe?.author?.profilePic}
          />
        </View>
        <View style={styles.headerCardTitleContainer}>
          <Text style={styles.headerCardTitle}>Recipe by:</Text>
          <Text style={styles.headerCardDesc}>
            {selectedRecipe?.author?.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerCardAction}
          onPress={onProfilePress}
        >
          <Image
            style={styles.headerCardActionIcon}
            source={icons.rightArrow}
          />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const Recipe = (props: IRecipeProps) => {
  const { navigation, route } = props;
  const [selectedRecipe, setSelectedRecipe] = useState<null | any>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const onBackActionPress = () => navigation.goBack();

  useEffect(() => {
    const { recipe } = route.params;
    if (recipe) {
      setSelectedRecipe(recipe);
    }
    return () => {};
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Animated.Image
          source={selectedRecipe?.image}
          style={[
            styles.headerBGImage,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                  }),
                },
                {
                  scale: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [2, 1, 0.75],
                  }),
                },
              ],
            },
          ]}
          resizeMode="contain"
        />

        <Animated.View
          style={[
            styles.headerCard,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 170, 250],
                    outputRange: [0, 0, 100],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View style={styles.headerBarContainer}>
        <Animated.View
          style={[
            styles.headerBar,
            {
              opacity: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                outputRange: [0, 1],
              }),
            },
          ]}
        />

        <Animated.View
          style={[
            styles.headerBarTitleContainer,
            {
              opacity: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                    outputRange: [50, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.headerBarTitle}>Recipe by:</Text>
          <Text style={styles.headerBarTitle2}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>

        <TouchableOpacity
          onPress={onBackActionPress}
          style={styles.headerBarActionContainer}
        >
          <Image source={icons.back} style={styles.headerBarBackAction} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBarBookmarkContainer}>
          <Image
            style={styles.headerBarBookmarkIcon}
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View style={styles.recipeInfoContainer}>
        <View style={styles.recipeInfoWrapper}>
          <Text style={styles.recipeInfoTitle}>{selectedRecipe?.name}</Text>
          <Text style={styles.recipeInfoDesc}>
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        <View>
          <Viewers viewerList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  };

  const renderIngredientHeader = () => {
    return (
      <View style={styles.ingredientHeaderContainer}>
        <Text style={styles.ingredientTitle}>Ingredients</Text>
        <Text style={styles.ingredientSub}>
          {selectedRecipe?.ingredients.length} items
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.listFooter}></View>}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderRecipeInfo()}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemIconContainer}>
              <Image style={styles.itemIcon} source={item.icon} />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantity}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
      {renderHeaderBar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  itemIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
  },
  itemIcon: {
    height: 40,
    width: 40,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  description: {
    ...FONTS.body3,
  },
  quantityContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  quantity: {
    ...FONTS.body3,
  },
  headerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  headerBGImage: {
    height: HEADER_HEIGHT,
    width: "200%",
  },
  headerCard: {
    position: "absolute",
    bottom: 10,
    left: 30,
    right: 30,
    height: 80,
  },
  headerCardBlur: {
    flex: 1,
    borderRadius: SIZES.radius,
  },
  headerCardDetail: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerAvatarContainer: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerCardTitleContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerCardTitle: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  headerCardDesc: {
    color: COLORS.white2,
    ...FONTS.h3,
  },
  headerCardAction: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.lightGreen1,
  },
  headerCardActionIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGreen1,
  },
  headerBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
    paddingBottom: 10,
  },
  headerBarActionContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.transparentBlack5,
  },
  headerBarBackAction: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGray,
  },
  headerBarBookmarkContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
  },
  headerBarBookmarkIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.darkGreen,
  },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.black,
  },
  headerBarTitleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerBarTitle: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  headerBarTitle2: {
    color: COLORS.white2,
    ...FONTS.h3,
  },
  recipeInfoContainer: {
    flexDirection: "row",
    height: 130,
    width: SIZES.width,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  recipeInfoWrapper: {
    flex: 1.5,
    justifyContent: "center",
  },
  recipeInfoTitle: {
    ...FONTS.h2,
  },
  recipeInfoDesc: {
    marginTop: 5,
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  listFooter: {
    marginBottom: 100,
  },
  ingredientHeaderContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: SIZES.radius,
    marginBottom: SIZES.padding,
  },
  ingredientTitle: {
    flex: 1,
    ...FONTS.h3,
  },
  ingredientSub: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
});

export default Recipe;
