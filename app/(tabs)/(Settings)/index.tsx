import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StarLevel from '../../../components/StarLevel'

export default function index() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 px-3'>
      <StarLevel />
    </SafeAreaView>
  )
}