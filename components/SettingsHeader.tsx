import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { DEMO_USER } from '../data';
import { DemoUserType } from '../interface';

type SettingsHeaderPropType = {
  showLevels: boolean;
  setShowLevels: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingsHeader({ showLevels, setShowLevels }: SettingsHeaderPropType) {
  const router = useRouter();

  return (
    <View className='bg-white/10 border border-white/15 rounded-2xl mb-12'>
      <View className="flex-row items-center gap-3 p-5">
        <Pressable onPress={() => {showLevels ? setShowLevels(false) : router.push('(Chats)')}}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Pressable>
        <Image
          source={DEMO_USER?.image}
          className="w-10 h-10 rounded-full"
        />
        <View>
          <Text className="text-white font-semibold text-base">
            {DEMO_USER?.username}
          </Text>
          <Text className="text-white/80 text-xs">
            {DEMO_USER?.groupName}
          </Text>
        </View>
      </View>
    </View>
  )
}