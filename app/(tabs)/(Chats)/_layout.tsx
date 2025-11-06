import React from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { use2goStore } from "../../../goStore";
import CallOptions from "../../../components/CallOptions";

export default function ChatsLayout() {
  const { currentFriend, toggleCallOption, showCallOption } = use2goStore();
  const route = useRouter();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="[id]"
        options={{
          header: () => (
            <View className="bg-[#0b304a] relative">
              <View className="bg-[#23455c] flex-row items-center justify-between px-4 py-5 pb-3 mt-12">
                {/* Left Section */}
                <View className="flex-row items-center gap-3">
                  <Pressable onPress={() => route.back()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                  </Pressable>
                  <Image
                    source={currentFriend?.image}
                    className="w-10 h-10 rounded-full"
                  />
                  <View>
                    <Text className="text-white font-semibold text-base">
                      {currentFriend?.username}
                    </Text>
                    <Text className="text-white/80 text-xs">
                      {currentFriend?.availability}
                    </Text>
                  </View>
                </View>

                {/* Right Section */}
                <Pressable 
                  onPress={toggleCallOption}
                  className="flex-row items-center gap-1">
                  <Ionicons name="call-outline" size={22} color="white" />
                  <Ionicons name="chevron-down-outline" size={10} color="white" />
                </Pressable>
              </View>
              {showCallOption && <CallOptions />}
            </View>
          ),
        }}
      />
    </Stack>
  );
}
