import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <LinearGradient
            colors={[ '#CBC3E3', 'purple', '#CBC3E3']}
            style={{ flex: 1 }}
    >
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-1 justify-top items-center">
          <Text className="text-h1 text-center text-white border-white border-b-2">About Us</Text>

        <View className="flex-1 justify-center items-center">
          <Text className="text-h2 text-center text-white">
            Welcome to the Schuyler Inn, information about the hotel
            will go here.
          </Text>
        </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

export default About