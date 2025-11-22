import { Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Contacts() {
  const contact = [
    {
      icon: <Ionicons name="mail" size={14} color="white" />,
      name: 'Zaza321@gmail.com'
    },
    {
      icon: <Ionicons name="call" size={14} color="white" />,
      name: '09012637588'
    },
    {
      icon: <Ionicons name="chatbox" size={14} color="white" />,
      name: '2go Rooms (7)'
    },
    {
      icon: <Ionicons name="person-outline" size={14} color="white" />,
      name: 'Friends (12/36)'
    },
  ]
  
  return (
    <View className='bg-white/10 border border-white/15 rounded-2xl mb-12 overflow-hidden'>
      {contact?.map((item, i) => (
        <View key={i} className={`flex-row items-center justify-between py-2 px-3 ${i !== 5 ? 'border-[0.5px] border-white/25' : ''}`}>
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