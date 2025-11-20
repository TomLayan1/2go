import { Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Others() {
  const others = [
    {
      icon: <Ionicons name="person-outline" size={14} color="white" />,
      name: 'My profile'
    },
    {
      icon: <Ionicons name="settings" size={14} color="white" />,
      name: 'Settings'
    },
    {
      icon: <Ionicons name="notifications-outline" size={14} color="white" />,
      name: 'Notification'
    },
    {
      icon: <Ionicons name="calendar" size={14} color="white" />,
      name: 'Calendar'
    },
    {
      icon: <Ionicons name="lock-closed-outline" size={14} color="white" />,
      name: 'Privacy'
    },
    {
      icon: <Ionicons name="star" size={14} color="white" />,
      name: 'Starred'
    },
  ]

  return (
    <View className='bg-white/20 border border-white/25 rounded-2xl overflow-hidden'>
      {others?.map((item, i) => (
        <View key={i} className={`flex-row items-center justify-between py-3 px-3 ${i !== 3 ? 'border-[0.5px] border-white/25' : ''}`}>
          <View className='flex-row items-center gap-2'>
            {item.icon}
            <Text className='text-white text-base'>{item.name}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={10} color="white" />
        </View>
      ))}
    </View>
  )
}