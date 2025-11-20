import React, { useLayoutEffect, useState, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { use2goStore } from '../../../goStore';
import MessageInput from '../../../components/MessageInput';

const Cross = require('../../../assets/icons/cross.png');
const Docs = require('../../../assets/icons/docs.png');
const Mic = require('../../../assets/icons/mic.png');
const Camera = require('../../../assets/icons/camera.png');

export default function Chats() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const friendId = Number(id);

  const { getFriendById, currentFriend, setShowCallOption } = use2goStore();

  useLayoutEffect(() => {
    if (id) getFriendById(friendId);
  }, [id, friendId, getFriendById]);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // TODO: send message
    setMessage('');
  };


  const renderMessageItem = useCallback(({ item }: { item: any }) => {
    const isMe = item.sender === 'You';
    const isText = typeof item.message === 'string';
    return (
      <View
        className={`${!isMe ? 'bg-[#247847] self-start' : 'bg-[#556f82] self-end'}
          min-w-[78%] ${isText ? 'py-3 px-2' : 'p-1'} rounded-2xl relative overflow-hidden`}
      >
        {isText ? (
          <Text className="text-white text-[15px] mb-2">{item.message}</Text>
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
    <KeyboardAvoidingView className='flex-1' behavior="position">
      {/* Chat list */}
      <View>
        <FlatList
          data={currentFriend?.chats ?? []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMessageItem}
          // Make the list fill space and scroll properly even when few items
          contentContainerStyle={{
            paddingHorizontal: 14,
            paddingBottom: (insets.bottom || 0) + 96, // leave room for input bar
            // flexGrow: 1,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          onScrollBeginDrag={() => {
            Keyboard.dismiss();
            setShowCallOption(false);
          }}
        />
      </View>

      {/* Input bar */}
      <MessageInput />
    </KeyboardAvoidingView>
  )
}