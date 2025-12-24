import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router';

const logo = require('../../assets/logo.png')

const chatIconHalf = require('../../assets/chatIcons/chat-icon-half.png');
const chatIconHalfRight = require('../../assets/chatIcons/chat-icon-half-right.png');
const chatIconQuater = require('../../assets/chatIcons/chat-icon-quater.png');
const chatIconFull = require('../../assets/chatIcons/chat-icon-full.png');
const chatIconFullUp = require('../../assets/chatIcons/chat-icon-full-up.png');
const chatIconFullDown = require('../../assets/chatIcons/chat-icon-full-down.png');
const star = require('../../assets/chatIcons/star.png');
const heart = require('../../assets/chatIcons/heart.png')

export default function GetStarted() {

  return (
    <SafeAreaView className='bg-[#0b304a] flex-1 justify-center'>
      <StatusBar style='light' />
      <View className='relative'>
        {/* Right */}
        <Image
          source={chatIconHalf}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[70px] h-[70px] absolute -right-4 top-[140]' 
        />
        <Image
          source={chatIconHalf}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[73px] h-[73px] absolute -right-4 top-[360]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute right-32 top-[300]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute right-16 top-[240]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute right-14 top-[150]'
        />

        {/* Center */}
        <Image
          source={chatIconFull}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[70px] h-[70px] absolute left-14 top-[80]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute left-48 top-[95]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-60 top-[70]'
        />
        <Image
          source={chatIconFullUp}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[80px] h-[80px] absolute right-[60] top-[100]'
        />
        <Image
          source={chatIconFullDown}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[100px] h-[100px] absolute right-[110] top-[212]'
        />
        <Image
          source={chatIconFull}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[70px] h-[70px] absolute left-36 top-[385]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute left-7 top-[310]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-56 top-[370]'
        />

        {/* left */}
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-8 top-[130]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute left-14 top-[200]'
        />
        <Image
          source={chatIconQuater}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[70px] h-[70px] absolute -left-6 top-[140]'
        /> 
        <Image
          source={chatIconHalfRight}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[70px] h-[70px] absolute -left-4 top-[330]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-14 top-[250]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute left-44 top-[320]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-72 top-[394]'
        />
        <Image
          source={star}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[13px] h-[13px] absolute left-20 top-[340]'
        />
        <Image
          source={heart}
          accessibilityLabel='chatIconHalf'
          resizeMode='contain'
          className='w-[16px] h-[16px] absolute left-28 top-[370]'
        />
      </View>

      {/* Logo */}
      <View className='flex-1 flex-col items-center justify-between ju pt-28 pb-28'>
        <Image
          source={logo}
          accessibilityLabel='Logo'
          resizeMode='contain'
          className='w-[60%]'
        />
        <Pressable className='bg-[#3abd43] w-[80%] py-5 rounded-full mx-auto'>
          <Link href="/(auth)/Login
          " className='text-white text-center text-[17px]'>
            Get Started
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}