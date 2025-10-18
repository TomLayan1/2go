import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text } from 'react-native'
import { Link } from 'expo-router';

export default function GetStarted() {

  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <StatusBar style='light' />
      <Pressable className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
        <Link href="/(auth)/Login">
          <Text className='text-white text-center text-[17px]'>Get Started</Text>
        </Link>
      </Pressable>
    </SafeAreaView>
  )
}