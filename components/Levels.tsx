import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { howToLevelUp, stars } from '../data'
import { Ionicons } from '@expo/vector-icons'

type LevelsPropType = {
  setShowLevels: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Levels({ setShowLevels }:LevelsPropType ) {
  
  return (
    <View className='w-[90%] bg-[#0b304ac9] rounded-2xl py-3 px-4 absolute top-0 right-0'>
      <Pressable onPress={() => setShowLevels(false)} className='flex-row items-center justify-center self-end mb-4'>
        <Text className='text-white text-[19px]'>x</Text>
      </Pressable>
      <Text className='text-white text-[18px] font-bold mb-4'>You can increase your star level by:</Text>
      {howToLevelUp?.map((item, i) => (
        <View key={i} className='flex-row items-center gap-2 mb-3'>
          <Text className='text-white text-[60px font-extrabold'>.</Text>
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