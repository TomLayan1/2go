import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold mb-2">404 - Page Not Found</Text>
      <Link href="/" asChild>
        <Pressable className="bg-black px-4 py-2 rounded-full">
          <Text className="text-white">Go Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
