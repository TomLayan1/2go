import { Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { router } from 'expo-router'

const logo = require('../../assets/logo.png');

const chatIconHalf = require('../../assets/chatIcons/chat-icon-half.png');
const chatIconHalfRight = require('../../assets/chatIcons/chat-icon-half-right.png');
const chatIconQuater = require('../../assets/chatIcons/chat-icon-quater.png');
const chatIconFull = require('../../assets/chatIcons/chat-icon-full.png');
const chatIconFullUp = require('../../assets/chatIcons/chat-icon-full-up.png');
const chatIconFullDown = require('../../assets/chatIcons/chat-icon-full-down.png');
const star = require('../../assets/chatIcons/star.png');
const heart = require('../../assets/chatIcons/heart.png')

export default function Login() {
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <ScrollView
        ref={scrollViewRef}
        className='bg-[#0b304a] flex-'
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
    <KeyboardAvoidingView className='flex-1' enabled={true} behavior={"padding"}>
          <View className='relative bg-black'>
            {/* Right */}
            <Image
              source={chatIconHalf}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[70px] h-[70px] absolute -right-4 top-[150]'
            />
            <Image
              source={star}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[13px] h-[13px] absolute right-32 top-[275]'
            />
            <Image
              source={heart}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[16px] h-[16px] absolute right-16 top-[240]'
            />
            <Image
              source={star}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[13px] h-[13px] absolute right-14 top-[120]'
            />

            {/* Center */}
            <Image
              source={chatIconFull}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[70px] h-[70px] absolute left-14 top-[50]'
            />
            <Image
              source={heart}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[16px] h-[16px] absolute left-48 top-[65]'
            />
            <Image
              source={star}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[13px] h-[13px] absolute left-60 top-[45]'
            />
            <Image
              source={chatIconFullUp}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[80px] h-[80px] absolute right-[60] top-[70]'
            />
            <Image
              source={chatIconFullDown}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[100px] h-[100px] absolute right-[110] top-[185]'
            />

            {/* left */}
            <Image
              source={star}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
            className='w-[13px] h-[13px] absolute left-8 top-[100]'
            />
            <Image
              source={heart}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[16px] h-[16px] absolute left-14 top-[170]'
            />
            <Image
              source={chatIconQuater}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[70px] h-[70px] absolute -left-6 top-[140]'
            />
            <Image
              source={star}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[13px] h-[13px] absolute left-14 top-[230]'
            />
            <Image
              source={heart}
              accessibilityLabel='chatIconHalf'
              resizeMode='contain'
              className='w-[16px] h-[16px] absolute left-44 top-[285]'
            />
          </View>
        <View className='flex-1 flex-col items-center justify-between ju pt-20 pb-20'>
          <Image
            source={logo}
            accessibilityLabel='Logo'
            resizeMode='contain'
            className='w-[60%]'
          />

          <View className='w-full '>
            <TextInput
              className='w-[80%] px-5 py-5 text-white bg-white/10 border border-white/15 rounded-2xl mx-auto mb-5 drop-shadow-md'
              placeholder='Name...'
              placeholderTextColor={"#ffffff"}
            />
            <TextInput
              className='w-[80%] px-5 py-5 text-white bg-white/10 border border-white/15 rounded-2xl mx-auto mb-5 drop-shadow-md'
              placeholder='Enter email...'
              placeholderTextColor={"#ffffff"}
            />
            <TextInput
              className='w-[80%] px-5 py-5 text-white bg-white/10 border border-white/15 rounded-2xl mx-auto mb-5 drop-shadow-md'
              placeholder='Enter password...'
              placeholderTextColor={"#ffffff"}
            />
          </View>
          <Text className='text-white text-center mb-5'>
            Don't Have An Account?
            <Text className='text-[#3abd43] font-bold  text-[17px]'> Sign Up</Text>
          </Text>
          <Pressable 
            onPress={() => router.push("/(tabs)/(Chats)")} 
            className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
            <Text className='text-white text-center text-[18px]'>Continue</Text>
          </Pressable>
        </View>
    </KeyboardAvoidingView>
      </ScrollView>
  )
}