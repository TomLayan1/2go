import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'


export default function GetStarted() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <StatusBar style='light' />
      <Pressable
        onPress={() => navigation.navigate("Login")}
        className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'
      >
        <Text className='text-white text-center text-[17px]'>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  )
}