import React, {
  useLayoutEffect,
  useState,
  useCallback
} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Keyboard,
  Animated,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { use2goStore } from '../../../goStore';
import MessageInput from '../../../components/MessageInput';
import ChatBg from '../../../components/ChatBg';

const heartIcon = require('../../../assets/chatIcons/chat-pg-heart-icon.png')
const chatIcon = require('../../../assets/chatIcons/chat-pg-chat-icon.png')

export default function Chats() {
  const [keyboardHeight] = useState(new Animated.Value(0));
  console.log('Keyboard height: ', keyboardHeight)
  
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const friendId = Number(id);

  const { getFriendById, currentFriend, setShowCallOption } = use2goStore();

  useLayoutEffect(() => {
    if (id) getFriendById(friendId);
  }, [id, friendId, getFriendById]);

  // Check for keyboard height
  useLayoutEffect(() => {
    const showKeyboard = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        Animated.timing(keyboardHeight, {
          toValue: e.endCoordinates.height,
          duration: 0,
          useNativeDriver: false
        }).start();
      }
    );

    const hideKeyboard = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      (e) => {
        Animated.timing(keyboardHeight,{
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    }
  }, []);


  const animatedStyle = {
    paddingBottom: keyboardHeight,
  };

  const renderMessageItem = useCallback(({ item }: { item: any }) => {
    const isMe = item.sender === 'You';
    const isText = typeof item.message === 'string';
    return (
      <View
        className={`${!isMe ? 'bg-[#247847] border-[#247847] self-start' : 'bg-[#556f82] border-[#556f82] self-end'}
          max-w-[78%] ${isText ? 'py-3 px-2' : ''} ${isText ? '' : 'border-2'} rounded-2xl relative overflow-hidden`}
      >
        {isText ? (
          <Text className="text-white text-[15px] mb-4">{item.message}</Text>
        ) : (
          <Image source={item.message} resizeMode="contain" />
        )}
        <Text className="text-white text-[12px] text-right absolute bottom-1.5 right-2.5">
          {item.time}
        </Text>
      </View>
    );
  }, []);


  return (
    <Animated.View className='flex-1 bg-[#0b304a] pt-3' style={animatedStyle}>
      {/* Background icons */}
      <ChatBg />

      {/* Chat list */}
      <FlatList
        data={currentFriend?.chats ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessageItem}
        contentContainerStyle={{
          paddingHorizontal: 14,
          paddingBottom: (insets.bottom || 0) + 16,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={() => {
          setShowCallOption(false);
        }}
      />

        {/* Input bar */}
        <MessageInput />
    </Animated.View>
  )
}