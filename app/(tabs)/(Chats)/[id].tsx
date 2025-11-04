import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, FlatList, Keyboard } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router'
import { use2goStore } from '../../../goStore';
import MessageInput from '../../../components/MessageInput';
import CallOptions from '../../../components/CallOptions';

export default function Chats() {
  const { id } = useLocalSearchParams<{id: string}>();
  const friendId = Number(id);

  const navigation = useNavigation();

  const { getFriendById, currentFriend } = use2goStore();

  useLayoutEffect(() => {
    id && getFriendById(friendId);
  }, [id, getFriendById])

  const [message, setMessage] = useState("");

  // To send message
  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Send:", message);
    setMessage("");
  };

  return (
    <>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View className="flex-1 bg-[#0b304a]">
          <View className="flex-1">
            {/* Chat Messages */}
            <FlatList
              contentContainerStyle={{ padding: 14, paddingBottom: 100 }}
              data={currentFriend?.chats}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
              renderItem={({ item }) => (
                <View
                  className={`${item.sender !== "You"
                    ? "bg-[#247847] self-start"
                    : "bg-[#556f82] self-end"
                    } min-w-[78%] ${typeof item.message === "string" ? "py-3 px-2" : "p-1"
                    } rounded-2xl relative overflow-hidden`}
                >
                  {typeof item.message === "string" ? (
                    <Text className="text-white text-[15px] mb-2">{item.message}</Text>
                  ) : (
                    <Image
                      source={item.message}
                      accessibilityLabel={`${item.sender} image`}
                      resizeMode="contain"
                    />
                  )}
                  <Text className="text-white font-semibold text-[12px] text-right absolute bottom-1.5 right-2.5">
                    {item.time}
                  </Text>
                </View>
              )}
            />

            {/* Message Input */}
            {/* <MessageInput /> */}
          </View>
        </View>
        <CallOptions />
      {/* </TouchableWithoutFeedback> */}
    </>
  )
}

const styles = StyleSheet.create({})