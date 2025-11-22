import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { howToLevelUp, stars } from '../data'
import { Ionicons } from '@expo/vector-icons'


export default function Levels( ) {
  
  return (
    <View className='w-[90%] bg-[#0b304ae0] rounded-2xl py-3 px-4 absolute top-0 right-0 z-50'>
      <Text className='text-white text-[18px] font-bold mb-4'>You can increase your star level by:</Text>
      {howToLevelUp?.map((item, i) => (
        <View key={i} className='flex-row items-center gap-2 mb-3'>
          <Ionicons name='ellipse' size={6} color="#ffffff" />
          <Text className='text-white text-base]'>{item}</Text>
        </View>
      ))}

      <Text className='text-white text-[18px] font-bold mb-4'>Star levels</Text>
      {stars?.map((item, i) => (
        <View key={i} className='flex-row items-center gap-2 mb-3'>
          <Image source={item.star} className='w-3 h-3' />
          <Text className='text-white text-base]'>{item.name}</Text>
        </View>
      ))}
    </View>
  )
}