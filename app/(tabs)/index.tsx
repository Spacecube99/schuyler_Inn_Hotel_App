import BulletItem from "@/components/bulletlist";
import InfoBox from "@/components/infobox";
import { LinkText } from "@/components/linkText";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from "../../constants/carousel";

export default function Index() {

  const { width } = useWindowDimensions();

  const images = Object.values(Images).map((source, index) => ({
    id: index.toString(),
    source,
  }));


  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
        colors={[ '#CBC3E3', 'purple', '#CBC3E3']}
        style={{ flex: 1 }}
      >

      <ScrollView
        contentContainerStyle={{ 
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 20,
          alignItems: 'center'
        }}
      >
      
        <View className='flex-1 w-full items-center mb-20'>
          
            <Text className="text-h1 text-white mb-5 text-center">
              Welcome to the Schuyler Inn
            </Text>

          <View style={{ width }}>
            <FlatList
              data={images}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={{ width, alignItems: "center" }}>
                  <Image
                    source={ item.source }
                    style={{
                      width: width * 0.8,
                      height: 256,
                      borderWidth: 2,
                      borderColor: "white",
                    }}
                    resizeMode="cover"
                  ></Image>
                </View>
                )}
            ></FlatList>
          </View>

          <View>
            <Text className="text-center text-white text-h2">
              Scroll images left and right for more
            </Text>
          </View>

            <View className="flex-1 justify-center items-center">
              <InfoBox>
                  Our rooms are $65.00 per night for both
                  single and double beds. Rooms are non-smoking.
                  For reservervations or extended stays call:
                  402-352-5454. For all other questions, call
                  402-615-3327.
              </InfoBox>
              
              <InfoBox>
                  We accept cash, credit, visa, and mastercard.
                  Sorry, no checks.
              </InfoBox>

              <InfoBox>
                This hotel offers a public break room and small
                kitchenette for guests to use. We are located next to
                a grocery store/pharmacy, mexican restaurant, and car
                wash.
              </InfoBox>

              <InfoBox>
                Monday through Saturday hours are from 8:00AM to 10:00PM
                Sundays are from 8:00AM to 6:00PM
              </InfoBox>

              <InfoBox>
                Address: 222 West 16th Street, Schuyler, NE 68661
                If you have any additional questions, contact us
                with email at manager@schuylerinn.com
              </InfoBox>

              <InfoBox>
                <View className="flex-1 items-center">
                  <Text>Rooms include:</Text>
                  <BulletItem>Free Wifi</BulletItem>
                  <BulletItem>Non-smoking rooms</BulletItem>
                  <BulletItem>Public break room</BulletItem>
                  <BulletItem>Kitchenette access</BulletItem>
                </View>
              </InfoBox>
              
              <View className="flex-1 justify-center items-center mt-10">
                <LinkText to="./about">
                  About us
                </LinkText>
                <LinkText to="./reserve">
                  Reserve a room
                </LinkText>
              </View>
            </View>
        </View>
      </ScrollView>
  </LinearGradient>
  );
}
