import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";

import { Home } from "../screens";
import { TabIcon } from "../components/TabIcon";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: "11%",
        },
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
        name="Search"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
        name="Bookmark"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
        name="Settings"
        component={Home}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
