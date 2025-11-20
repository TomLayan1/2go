import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Communities() {
  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 px-3 flex-row items-center justify-center' edges={['top']}>
          <Text className='text-white text-[60px]'>Communities</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})