import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from "react-native";
import { FRIENDS } from "../data";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ChatsStackParamList = {
  ChatsList: undefined;
  ChatDetail: { id: number };
};

type NavigationProp = NativeStackNavigationProp<ChatsStackParamList, "ChatsList">;

interface ChatsType {
  id: number;
  sender: string;
  message: string;
  time: string;
}

export interface FriendType {
  id: number;
  username: string,
  image: ImageSourcePropType;
  status: string;
  level: string;
  availability: string;
  chats: ChatsType[];
}

type ChatListPropType = {
  section: string;
}

export default function ChatList({ section }: ChatListPropType) {
  const navigation = useNavigation<NavigationProp>();

  // Filter friend line 
  const filteredList: FriendType[] = FRIENDS?.filter(item => item.availability === section.toLowerCase())
  console.log("Section: ", section)

  return (
    <View>
      <FlatList
        data={filteredList}
        keyExtractor={(item) => (item.id.toString())}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("ChatDetail", { id: item.id })} className="w-full flex-row items-center gap-5">
            <Image source={item.image} />
            <View className="flex-1 flex-row items-center justify-between gap-5 border-b-[0.3px] border-b-[#b2afb6] py-2">
              <View className="flex-1 flex-col gap-1.5">
                <Text className="text-[15px] text-white">{item.username}</Text>
                <Text
                  className="text-[15px] text-[#c7c3cd] text-nowrap overflow-ellipsis"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >{item.status}</Text>
              </View>
              <View className="flex-col items-center gap-3">
                <Ionicons name="star" size={17} color={`${item.level === "amature" ? '#7b3dd2'
                  : item.level === "expert" ? "blue"
                  : item.level === "novice" ? "red"
                  : item.level === "master" ? "gold"
                  : item.level === "professional" ? "green"
                  : item.level === "senior" ? "#9c65e3"
                  : "white"
                }`} />
                <Ionicons name="ellipse" size={11} color={`${item.availability === 'online' ? '#3abd43' : item.availability === 'away' ? '#ab922c' : '#a6a6a6'}`} />
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}