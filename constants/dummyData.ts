import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import images from "./images";
import icons from "./icons";

const trendingRecipes = [
  {
    id: uuid(),
    name: "Spaghetti With Shrimp Sauce",
    image: images.spagetti,
    duration: "30 mins",
    serving: 1,
    isBookmark: false,
    category: "Pasta",
    author: {
      profilePic: images.UserProfile5,
      name: "Maria",
    },
    ingredients: [
      {
        id: uuid(),
        icon: icons.pasta,
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: uuid(),
        icon: icons.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: uuid(),
        icon: icons.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: uuid(),
        icon: icons.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: uuid(),
        icon: icons.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: uuid(),
        icon: icons.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: uuid(),
        profilePic: images.UserProfile1,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile2,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile3,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: uuid(),
    name: "Malaysian Chicken Satay",
    image: images.satay,
    duration: "50 mins",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile8,
      name: "Mandy",
    },
    ingredients: [
      {
        id: uuid(),
        icon: icons.chicken,
        description: "Boneless Chicken Thighs",
        quantity: "1kg",
      },
      {
        id: uuid(),
        icon: icons.lemongrass,
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: uuid(),
        icon: icons.onion,
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: uuid(),
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: uuid(),
        icon: icons.coriander,
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
    viewers: [
      {
        id: uuid(),
        profilePic: images.UserProfile5,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile4,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile1,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile2,
      },
      {
        id: uuid(),
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: uuid(),
    name: "Sarawak Laksa",
    image: images.laksa,
    duration: "30 mins",
    serving: 1,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile9,
      name: "Jessie",
    },
    ingredients: [
      {
        id: uuid(),
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: uuid(),
        icon: icons.lemongrass,
        description: "Lemongrass",
        quantity: "2 stalks",
      },
      {
        id: uuid(),
        icon: icons.egg,
        description: "Egg",
        quantity: "2",
      },
      {
        id: uuid(),
        icon: icons.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: uuid(),
        icon: icons.shallot,
        description: "Shallot",
        quantity: "4",
      },
      {
        id: uuid(),
        icon: icons.pasta,
        description: "vermicelli",
        quantity: "100g",
      },
    ],
    viewers: [
      {
        id: uuid(),
        name: "User 1",
        profilePic: images.UserProfile1,
      },
      {
        id: uuid(),
        name: "User 2",
        profilePic: images.UserProfile2,
      },
      {
        id: uuid(),
        name: "User 3",
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: uuid(),
    name: "Nasi Lemak",
    image: images.nasiLemak,
    duration: "1 hour",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile7,
      name: "Ali Baba",
    },
    ingredients: [
      {
        id: uuid(),
        icon: icons.chilli,
        description: "Dried Chilli",
        quantity: "30g",
      },
      {
        id: uuid(),
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: uuid(),
        icon: icons.egg,
        description: "Egg",
        quantity: "10",
      },
      {
        id: uuid(),
        icon: icons.rice,
        description: "rice",
        quantity: "1kg",
      },
      {
        id: uuid(),
        icon: icons.anchovy,
        description: "Dried anchovies",
        quantity: "3 cups",
      },
    ],
    viewers: [],
  },
];

const categories = trendingRecipes;

export default {
  trendingRecipes,
  categories,
};
