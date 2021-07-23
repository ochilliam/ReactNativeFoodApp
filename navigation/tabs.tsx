import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";

import { Home } from "../screens";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator tabBar initialRouteName="Home">
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Home} />
      <BottomTab.Screen name="Bookmark" component={Home} />
      <BottomTab.Screen name="Settings" component={Home} />
    </BottomTab.Navigator>
  );
};

export default Tabs;
