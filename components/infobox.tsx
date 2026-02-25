import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type InfoBoxProps = {
    children: ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <View className="mt-7 w-64 h-64 border-2 justify-center items-center p-4">
      <LinearGradient
      colors={['tan', 'yellow', 'tan']}
      style={ StyleSheet.absoluteFillObject }
      />
    <View className="flex-1 justify-center items-center p-4">
        <Text className="text-center">
          {children}
        </Text>
      </View>
    </View>
  );
}
