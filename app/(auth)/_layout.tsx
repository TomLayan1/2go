import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLaout() {
  return (
    <Stack>
      <Stack.Screen
        name='GetStarted'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login' options={{ headerShown: false }} />
    </Stack>
  )
}