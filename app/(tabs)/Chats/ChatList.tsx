import React from 'react'
import Search from '../../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChatList() {
  
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 pt-5 px-6'>
      <Search />
    </SafeAreaView>
  )
}

