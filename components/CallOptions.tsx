import React from 'react'
import { View, Text } from 'react-native'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'

export default function CallOptions() {
  const CALL_OPTIONS = [
    {
      name: 'Voice Call',
      icon: <Ionicons name="call-outline" size={20} color="white" />
    },
    {
      name: 'Video Call',
      icon: <Ionicons name="videocam-outline" size={20} color="white" />
    },
    {
      name: 'Schedule Call',
      icon: <Ionicons name="calendar-outline" size={20} color="white" />
    },
  ]

  return (
    // <BlurView
    //   intensity={100}
    //   tint="dark"    
    //   style={{
    //     position: 'absolute',
    //     top: 60,
    //     right: 7,
    //     width: '60%',
    //     borderRadius: 11,
    //     overflow: 'hidden', // ensures rounded corners apply
    //     zIndex: 20,
    //   }}
    // >
    <View className='w-[60%] bg-[#0b304ae0] rounded-xl absolute top-[60] right-[7]'>
      {CALL_OPTIONS.map((option, i) => (
        <View key={i} className={`w - full flex-row items-center justify-between p-3 ${i === 1 ? 'border-y-[0.4px] border-white' : ''}`}>
          <Text className='text-white'>{option.name}</Text>
          {option.icon}
        </View>
      ))}
    </View>
    // </BlurView>
  )
}
