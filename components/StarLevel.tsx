import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Levels from './Levels';
const master = require('../assets/icons/master.png');
const ultimate = require('../assets/icons/ultimate.png')

export default function StarLevel() {
  const [showLevels, setShowLevels] = useState(false);
  const calc = (value: number) => {
    return value.toFixed(1)
  }
  
  return (
    <View className='bg-white/20 border border-white/25 rounded-2xl p-3 mb-14 relative'>
      <View className='w-full flex-row items-center justify-between mb-4'>
        <Text className='text-white text-2xl font-bold'>Your star level</Text>
        <Pressable onPress={() => setShowLevels(true)} className='bg-white py-1 px-3 text-2xl font-extrabold rounded-full'>
          <Text className='text-[#3BBC44] text-xl font-bold'>!</Text>
        </Pressable>
      </View>
      <View className='flex-row justify-between mb-2'>
        <View className='flex-row gap-1'>
          <Image source={master} className='w-4 h-4' />
          <Text className='text-white'>Master</Text>
        </View>
        <View className='flex-row gap-1'>
          <Image source={ultimate} className='w-4 h-4' />
          <Text className='text-white'>Ultimate</Text>
        </View>
      </View>
      <View className='w-full bg-white rounded-3xl mb-1'>
        <View className='w-[84.1%] bg-[#3BBC44] py-1 rounded-3xl'></View>
      </View>
      <Text className='text-white text-base'>You're {calc(100 - 84.1)}% away from reaching ultimate</Text>

      {/* Levels */}
      {showLevels && <Levels setShowLevels={setShowLevels} />}
    </View>
  )
}

const styles = StyleSheet.create({})