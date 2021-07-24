import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { TrendCard } from "../components/TrendCard";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const onRecipePress = () => navigation.navigate("Recipe");
  const onCategoryActionPress = () => navigation.navigate("Recipe");
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerHowdy}>Hey howdy!</Text>
          <Text style={styles.headerGreeting}>
            what would you like to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={images.UserProfile2} style={styles.headerAvatar} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategoryHeader = () => {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <TouchableOpacity onPress={onCategoryActionPress}>
          <Text style={styles.categoryActionText}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderRecipeCard = () => {
    return (
      <View style={styles.recipeCard}>
        <View style={styles.recipe}>
          <Image source={images.recipe} style={styles.recipeImage} />
        </View>

        <View style={styles.recipeDetail}>
          <Text style={styles.recipeText}>
            You have 12 recipes that you havent tried yet!
          </Text>
          <TouchableOpacity onPress={onRecipePress} style={styles.recipeAction}>
            <Text style={styles.recipeActionText}>See Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrends = () => {
    return (
      <View style={styles.trendsContainer}>
        <Text style={styles.trendsTitle}>Trending Recipes</Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <TrendCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 0,
              }}
              onPress={() => navigation.navigate("Recipe", { item })}
              item={item}
            />
          )}
        />
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.searchBar}>
        <Image source={icons.search} style={styles.searchBarIcon} />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {renderRecipeCard()}
            {renderTrends()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            containerStyle={styles.itemContainer}
            item={item}
            onPress={() => navigation.navigate("Recipe", { recipe: item })}
          />
        )}
        ListFooterComponent={<View style={styles.itemFooter} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    alignItems: "center",
    height: 80,
  },
  headerWrapper: {
    flex: 1,
  },
  headerHowdy: {
    color: COLORS.darkGreen,
    ...FONTS.h2,
  },
  headerGreeting: {
    marginTop: 3,
    color: COLORS.gray,
    ...FONTS.body3,
  },
  headerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 28,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },
  searchInput: { marginLeft: SIZES.radius, ...FONTS.body3 },
  searchBarIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  itemFooter: {
    marginBottom: 100,
  },
  itemContainer: {
    marginHorizontal: SIZES.padding,
  },
  recipeCard: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  recipeImage: { width: 80, height: 80 },
  recipeDetail: {
    flex: 1,
    paddingVertical: SIZES.radius,
  },
  recipeText: { width: "80%", ...FONTS.body4 },
  recipeAction: {
    marginTop: 10,
  },
  recipeActionText: {
    color: COLORS.darkGreen,
    textDecorationLine: "underline",
    ...FONTS.h4,
  },
  recipe: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  trendsContainer: {
    marginTop: SIZES.padding,
  },
  trendsTitle: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: SIZES.padding,
  },
  categoryTitle: {
    flex: 1,
    ...FONTS.h2,
  },
  categoryActionText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default Home;
