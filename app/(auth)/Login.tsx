import { Image, Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const logo = require('../../assets/logo.png');

export default function Login() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <View className='flex-1 flex-col items-center justify-between ju pt-28 pb-20'>
        <Image
          source={logo}
        />

        <View className='w-full'>
          <TextInput
            className='w-[80%] px-5 py-5 text-white bg-white/20 border border-white/30 rounded-2xl mx-auto mb-5'
            placeholder='Name...'
            placeholderTextColor={"#ffffff"}
          />
          <TextInput
            className='w-[80%] px-5 py-5 text-white bg-white/20 border border-white/30 rounded-2xl mx-auto mb-5'
            placeholder='Enter email...'
            placeholderTextColor={"#ffffff"}
          />
          <TextInput
            className='w-[80%] px-5 py-5 text-white bg-white/20 border border-white/30 rounded-2xl mx-auto mb-5'
            placeholder='Enter password...'
            placeholderTextColor={"#ffffff"}
          />
        </View>
        <Text className='text-white text-center text-[18px] mb-5'>
          Don't Have An Account?
          <Text className='text-[#3abd43]'> Sign Up</Text>
        </Text>
        <Pressable 
          onPress={() => router.push("/(tabs)/(Chats)")} 
          className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
          <Text className='text-white text-center text-[18px]'>Continue</Text>
        </Pressable>
      </View>
 </SafeAreaView>
  )
}