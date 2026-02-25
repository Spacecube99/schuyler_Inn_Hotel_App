import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';


type InfoBoxProps = {
    children: ReactNode;
}

export default function BulletItem({ children }: InfoBoxProps) {
    return (
    <View className="flex-row justify-start">
        <Text className='mr-8'>{'\u2022'}
        </Text>
        <Text className="flex-1">{children}</Text>
    </View>
    );
}