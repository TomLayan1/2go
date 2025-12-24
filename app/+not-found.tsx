import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function NotFound() {
  return (
    <View className="bg-[#0b304a] flex-1 items-center justify-center">
      <Text className="text-white text-3xl font-bold mb-9">404 - Page Not Found</Text>
      <Link href="/(auth)/Login" asChild>
        <Pressable className="bg-[#3abd43] w-[80%] py-5  rounded-full">
          <Text className="text-white text-center text-xl">Go Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
