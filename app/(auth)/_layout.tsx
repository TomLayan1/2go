import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='GetStarted'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login' options={{
        headerStyle: {
          backgroundColor: "#0b304a",
        },
        headerShadowVisible: false,
        headerTintColor: "#ffffff",
        title: "",
      }} />
    </Stack>
  )
}