import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StarLevel from '../../../components/StarLevel'
import Contacts from '../../../components/Contacts'
import Others from '../../../components/Others'
import { ScrollView } from 'react-native'
import SettingsHeader from '../../../components/SettingsHeader'

export default function index() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 px-3 pt-3' edges={['top']}>
      <SettingsHeader />
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 27,
          paddingBottom: 10,
          flexGrow: 1,
        }}
      > */}
        <StarLevel />
        <Contacts />
        <Others />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}