import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from "react-native";
import { FRIENDS } from "../data";
import { useRouter } from "expo-router";
import { use2goStore } from "../goStore";


interface ChatsType {
  id: number;
  sender: string;
  message: string | ImageSourcePropType;
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

export default function Card({ section }: ChatListPropType) {
  const { friendList } = use2goStore()
  const router = useRouter();

  // Filter friend line
  const filteredList: FriendType[] = friendList?.filter(item => item.availability === section.toLowerCase())

  return (
    <View className="flex-1">
      <FlatList
        data={filteredList}
        keyExtractor={(item) => (item.id.toString())}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`(Chats)/${item.id}`)} className="w-full flex-row items-center gap-5">
            <Image source={item.image} />
            <View className="flex-1 flex-row items-center justify-between gap-5 border-b-[0.3px] border-b-[#b2afb6] py-2">
              <View className="flex-1 flex-col gap-1.5">
                <Text className="text-[15px] text-white">{item.username}</Text>
                <Text
                  className="text-[15px] text-[#989898] text-nowrap overflow-ellipsis"
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
          </TouchableOpacity>
        )}
      />
    </View>
  )
}