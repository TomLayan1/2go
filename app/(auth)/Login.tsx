import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <View className='mb-'>
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
      <Pressable className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
        <Link href="/(tabs)/Chats">
          <Text className='text-white text-center text-[18px]'>Continue</Text>
        </Link>
      </Pressable>
    </SafeAreaView>
  )
}