import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import React from 'react';
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from '../../constants/icons';
import '../../global.css';

const TabIcon = ({ focused, icon, title }: any) => {
    return (
        <View>
            
            <View
                className={`
                    w-14 h-14 mt-6 rounded-full items-center justify-center
                    ${focused ? "mb-10 bg-gray-400" : "bg-transparent"}
                `}
            >

            {focused && (
                <View className="absolute -top-7 items-center w-full">
                    <Text className="text-h2 w-40 text-base font-semibold text-black text-center">
                        {title}
                    </Text>
                </View>
            )}

                <Image
                    source={icon}
                    className={`
                        w-14 h-14 border-2 rounded-full
                    `}
                    resizeMode="contain"
                ></Image>
            </View>
        </View>
    )
}

export default function RootLayout() {
  return (

<SafeAreaView className="flex-1 bg-black">
<Tabs
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            position: 'absolute',
            height: 60,
        },

        tabBarBackground: () => (
            <LinearGradient
                className="border-t-2"
                colors={['yellow', 'lime', 'yellow']}
                start={{ x:0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ flex: 1 }}
            ></LinearGradient>
        ),
    }}
>

        <Tabs.Screen
            name="index"
            options= {{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <TabIcon
                    focused={focused}
                    title="Home"
                    icon={icons.home}
                ></TabIcon>
                )
            }}
        />
        <Tabs.Screen
            name="about"
            options= {{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <TabIcon
                    focused={focused}
                    title='About-Us'
                    icon={icons.info}
                ></TabIcon>
                )
            }}
        />
        <Tabs.Screen
            name="reserve"
            options= {{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                <TabIcon
                    focused={focused}
                    title='Reserve'
                    icon={icons.reserve}
                ></TabIcon>
                )
            }}
        />
    </Tabs>
    </SafeAreaView>
  )
}