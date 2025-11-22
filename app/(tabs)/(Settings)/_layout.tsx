import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { DEMO_USER } from '../../../data';


export default function SettingsLayout() {
  const route = useRouter();

  return (
    <Stack>
      <Stack.Screen 
        name='index'
        options={{
          headerShown: false
          // header: () => (
          //   <View className='bg-[#0b304a] px-3 pt-14'>
          //     <View className='bg-white/20 border border-white/25 rounded-2xl'>
          //       <View className="flex-row items-center gap-3 p-5">
          //         <Pressable onPress={() => route.back()}>
          //           <Ionicons name="arrow-back-outline" size={24} color="white" />
          //         </Pressable>
          //         <Image
          //           source={DEMO_USER?.image}
          //           className="w-10 h-10 rounded-full"
          //         />
          //         <View>
          //           <Text className="text-white font-semibold text-base">
          //             {DEMO_USER?.username}
          //           </Text>
          //           <Text className="text-white/80 text-xs">
          //             {DEMO_USER?.groupName}
          //           </Text>
          //         </View>
          //       </View>
          //     </View>
          //   </View>
          // )
        }}
      />
    </Stack>
  )
}