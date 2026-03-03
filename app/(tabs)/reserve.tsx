import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Reserve = () => {
  return (
    <LinearGradient
                colors={[ '#CBC3E3', 'purple', '#CBC3E3']}
                className="flex-1"
    >
      <SafeAreaView className="flex-1">
          <View className="flex-1 justify-start">
              <Text className="text-h1 text-center text-white border-white border-b-2">Reservations</Text>
              <Text className="text-h2 mt-10 text-white text-center">Reserve a room here:</Text>
          </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Reserve