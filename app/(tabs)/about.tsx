import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <LinearGradient
            colors={[ '#CBC3E3', 'purple', '#CBC3E3']}
            className="flex-1"
    >
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-1 justify-top items-center">
          <Text className="text-5xl text-center text-white border-white border-b-2 mt-14">About Us</Text>
          <Text className="text-h2 text-center text-white mt-10">
            Welcome to the Schuyler Inn, information about the hotel
            will go here.
          </Text>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

export default About