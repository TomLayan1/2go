import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StarLevel from '../../../components/StarLevel'
import Contacts from '../../../components/Contacts'
import Others from '../../../components/Others'
import { ScrollView } from 'react-native'
import SettingsHeader from '../../../components/SettingsHeader'

export default function index() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 px-3' edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 0,
          paddingBottom: 10,
          flexGrow: 1,
        }}
      >
        {/* <SettingsHeader /> */}
        <StarLevel />
        <Contacts />
        <Others />
      </ScrollView>
    </SafeAreaView>
  )
}