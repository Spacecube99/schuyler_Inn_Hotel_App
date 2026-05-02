import BulletItem from "@/components/bulletlist";
import InfoBox from "@/components/infobox";
import { LinkText } from "@/components/linkText";
import { LinearGradient } from "expo-linear-gradient";
import { Href } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Images } from "../../constants/carousel";
import { Hotel, searchHotels } from "../../helpers/hotelsapi";

export default function Index() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    try {
      const data = await searchHotels("Schuyler");

      console.log("API RESPONSE:", data);

      setHotels(data?.hotels ?? data?.data?.hotels ?? []);
    } catch (err) {
      console.log("ERROR:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const infoData = [
    "Our rooms are $65.00 per night...",
    "We accept cash, credit...",
    "This hotel offers a public break room...",
    "Monday through Saturday hours...",
    "Address: 222 West 16th Street...",
  ];

  const images = Object.values(Images).map((source, index) => ({
    id: index.toString(),
    source,
  }));

  const links: Href[] = ["/about", "/reserve"];

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#CBC3E3", "purple", "#CBC3E3"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <FlatList
          data={hotels}
          keyExtractor={(item, index) =>
            item.id?.toString() ?? index.toString()
          }
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View className="mb-4 px-5">
              <Text className="font-bold text-white text-lg">
                {item.name}
              </Text>
              <Text className="text-white/80">
                {item.address}
              </Text>
            </View>
          )}
          ListHeaderComponent={
            <View>
            {error && (
              <Text className="mt-10 text-red-500 text-center mb-4">
                Error: {error}
              </Text>
            )}


              <View className="items-center pb-5">
                <Text className="text-3xl font-bold text-white text-center my-5 px-4">
                  Welcome to the Schuyler Inn
                </Text>

                <ScrollView
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  className="w-full h-[220px]"
                >
                  {images.map((item) => (
                    <View
                      key={item.id}
                      className="w-[300px] items-center self-center"
                    >
                      <Image
                        source={item.source}
                        className="w-[90%] h-[200px] border-2 border-white rounded-lg"
                        resizeMode="cover"
                      />
                    </View>
                  ))}
                </ScrollView>

                <Text className="text-white text-center mt-2 italic">
                  Scroll images left and right for more
                </Text>

                <View className="mt-5 items-center w-full px-4">
                  {infoData.map((text, index) => (
                    <InfoBox key={index}>{text}</InfoBox>
                  ))}

                  <InfoBox>
                    <View className="items-center">
                      <Text className="mb-2 font-bold text-lg">
                        Rooms include:
                      </Text>
                      <BulletItem>Free Wifi</BulletItem>
                      <BulletItem>Non-smoking rooms</BulletItem>
                      <BulletItem>Public break room</BulletItem>
                      <BulletItem>Kitchenette access</BulletItem>
                    </View>
                  </InfoBox>

                  <View className="mt-6 w-full items-center">
                    {links.map((path, index) => (
                      <LinkText key={index} to={path}>
                        {typeof path === "string"
                          ? path.replace("/", "").toUpperCase()
                          : "LINK"}
                      </LinkText>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
