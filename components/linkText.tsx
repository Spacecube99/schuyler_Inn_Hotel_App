import { RelativePathString, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from "react-native";

export function LinkText({ 
  children, 
  to,
 } : { 
  children: string; 
  to: RelativePathString;
}) {
  const router = useRouter();
  const [visited, setVisited] = useState(false);

  const handlePress = () => {
    setVisited(true);
    router.push(to);
  };
  
  return (
    <TouchableOpacity onPress={handlePress}>
        <Text className={`text-h2 text-blue-500 underline ${visited ? 'text-purple-500' : 'text-blue-500'}`}
        >
          {children}
        </Text>
    </TouchableOpacity>
  );
}