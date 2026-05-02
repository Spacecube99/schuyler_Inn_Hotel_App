import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants/icons";
import "../../global.css";

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <View className="items-center justify-center">

        {focused && (
          <View className="absolute -top-7 items-center w-full">
            <Text className="text-h2 w-40 text-base font-semibold text-black text-center">
              {title}
            </Text>
          </View>
        )}

        <View
          className={`w-14 h-14 mt-6 border-2 border-white rounded-full items-center justify-center ${
            focused ? "mb-10 bg-yellow-500" : "bg-blue-400"
          }`}
        >
            <Image
              source={icon}
              className="w-14 h-14"
              resizeMode="contain"
            />
      </View>
    </View>
  );
};

export default function RootLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          position: "absolute",
        },
        tabBarBackground: () => (
          <LinearGradient
            style={{ flex: 1 }}
            colors={["white", "gray", "black"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="About-Us" icon={icons.info} />
          ),
        }}
      />

      <Tabs.Screen
        name="reserve"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Reserve" icon={icons.reserve} />
          ),
        }}
      />
    </Tabs>
  );
}