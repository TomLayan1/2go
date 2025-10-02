import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Friends() {
  return(
    <View className="w-full">
      <View>
        <View className="">
          <Text className="text-white text-[15px]">Online</Text>
          <Ionicons name="ellipse" size={7} color={'#ffffff'} />
        </View>
      </View>
      <Ionicons name="menu" size={19} color={"#ffffff"} />
    </View>
  )
}