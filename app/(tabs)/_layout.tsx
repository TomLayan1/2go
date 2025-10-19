import { Image } from 'react-native';
import React from 'react'
import { Tabs } from 'expo-router'

// icons
const StoriesIcon = require("../../assets/icons/stories.png");
const CallIcon = require("../../assets/icons/phone.png");
const ChatLeftIcon = require("../../assets/icons/chat-left.png");
const ChatRightIcon = require("../../assets/icons/chat-right.png");
const CommunitiesIcon = require("../../assets/icons/communities.png");
const SettingsIcon = require("../../assets/icons/settings.png");

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName='Chats'
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b304a",
          borderTopWidth: 0.5,
          height: 74,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen 
        name='Stories' 
        options={{ 
          headerShown: false,
          tabBarIcon: () => (
            <Image 
              source={StoriesIcon} 
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          )
        }} />
      <Tabs.Screen 
        name='Calls' 
        options={{ 
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={CallIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          )
        }} />
      <Tabs.Screen 
        name='Chats' 
        options={{ 
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={ChatRightIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          )
        }} />
      <Tabs.Screen 
        name='Communities' 
        options={{ 
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={CommunitiesIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          )
        }} />
      <Tabs.Screen 
        name='Settings' 
        options={{ 
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={SettingsIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          )
        }} />
    </Tabs>
  )
}