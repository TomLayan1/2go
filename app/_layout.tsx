import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' options={{ headerShown: false }} />
    </Stack>
  )
}