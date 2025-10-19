import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChatsLayout() {
  return (
    <Stack>
      <Stack.Screen name='ChatList' options={{ headerShown: false }} />
      <Stack.Screen name='[id]' options={{ headerShown: false }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})