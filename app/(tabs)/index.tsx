import BulletItem from "@/components/bulletlist";
import InfoBox from "@/components/infobox";
import { LinkText } from "@/components/linkText";
import { LinearGradient } from "expo-linear-gradient";
import { RelativePathString } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "../../constants/carousel";



export default function Index() {

  const infoData = [
    "Our rooms are $65.00 per night for both\
    single and double beds. Rooms are non-smoking.\
    For reservations or extended stays call:\
    402-352-5454. For all other questions, call\
    402-615-3327.",
    "We accept cash, credit, visa, and mastercard.\
    Sorry, no checks.",
    "This hotel offers a public break room and small\
    kitchenette for guests to use. We are located next to\
    a grocery store/pharmacy, mexican restaurant, and car\
    wash.",
    "Monday through Saturday hours are from 8:00AM to 10:00PM\
    Sundays are from 8:00AM to 6:00PM",
    "Address: 222 West 16th Street, Schuyler, NE 68661\
    If you have any additional questions, contact us\
    with email at manager@schuylerinn.com",
  ];

  const images = Object.values(Images).map((source, index) => ({
    id: index.toString(),
    source,
  }));

  const links = [
    "./about" as RelativePathString,
    "./reserve" as RelativePathString,
  ];

  return (
    <LinearGradient
      colors={["#CBC3E3", "purple", "#CBC3E3"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          contentContainerClassName="items-center pb-10"
        >
          <View className="flex-1 w-full items-center mb-20">
            <Text className="text-h1 text-white mb-5 text-center">
              Welcome to the Schuyler Inn
            </Text>

            {/* Image Carousel */}
            <View className="w-full">
              <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="w-screen items-center">
                    <Image
                      source={item.source}
                      className="w-4/5 h-64 border-2 border-white"
                      resizeMode="cover"
                    />
                  </View>
                )}
              />
            </View>

            <Text className="text-center text-white text-h2 mt-4">
              Scroll images left and right for more
            </Text>

            {/* Info Boxes */}
            <View className="justify-center items-center mt-6">
              {infoData.map((text, index) => (
                <InfoBox key={index}>{text}</InfoBox>
              ))}

              <InfoBox>
                <View className="items-center">
                  <Text className="mb-2">Rooms include:</Text>
                  <BulletItem>Free Wifi</BulletItem>
                  <BulletItem>Non-smoking rooms</BulletItem>
                  <BulletItem>Public break room</BulletItem>
                  <BulletItem>Kitchenette access</BulletItem>
                </View>
              </InfoBox>

              {links.map((text, index) => (
                <LinkText key={index} to={text}>
                  {text.replace("./", "")}
                </LinkText>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}