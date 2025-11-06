import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router';

const logo = require('../../assets/logo.png')

export default function GetStarted() {

  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <StatusBar style='light' />
      <View className='flex-1 flex-col items-center justify-between ju pt-28 pb-28'>
        <Image
          source={logo}
        />
        <Pressable className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
          <Link href="/(auth)/Login" className='text-white text-center text-[17px]'>
            Get Started
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}