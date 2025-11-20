import React, { useState } from 'react'
import Search from '../../../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'
import FriendList from '../../../components/FriendList'

export default function index() {
  const [section, setSection] = useState<string>("Online");
  
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 pt-5 px-4' edges={['top']}>
      <Search />
      <FriendList section={section} setSection={setSection} />
    </SafeAreaView>
  )
}

