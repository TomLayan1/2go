import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StarLevel from '../../../components/StarLevel'
import Contacts from '../../../components/Contacts'
import Others from '../../../components/Others'
import SettingsHeader from '../../../components/SettingsHeader'

export default function index() {
  const [showLevels, setShowLevels] = useState<boolean>(false);
  
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 px-3 pt-3' edges={['top']}>
      <SettingsHeader showLevels={showLevels} setShowLevels={setShowLevels} />
      <StarLevel showLevels={showLevels} setShowLevels={setShowLevels} />
      <Contacts />
      <Others />
    </SafeAreaView>
  )
}