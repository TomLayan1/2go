import { View, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ChatsStackParamList = {
  ChatsList: undefined;
  ChatDetail: { id: number };
};

type ChatDetailRouteProp = RouteProp<ChatsStackParamList, "ChatDetail">;

export default function ChatDetail() {
  const route = useRoute<ChatDetailRouteProp>();
  const { id } = route.params;

  return (
    <View className="flex-1 items-center justify-center bg-[#0b304a]">
      <Text style={{ color: "white", fontSize: 20 }}>
        This is chat {id}
      </Text>
    </View>
  );
}
