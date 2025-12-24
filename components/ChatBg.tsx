import { Image, View } from "react-native"

const heartIcon = require('../assets/chatIcons//chat-pg-heart-icon.png')
const chatIcon = require('../assets/chatIcons/chat-pg-chat-icon.png')


export default function ChatBg() {

  return(
    <View className='absolute top-0 left-0 w-full h-screen -z-30'>
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-24 left-8'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute top-36 left-14'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-96 right-8'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-44 right-1/2'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute top-24 right-8'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-44 right-14'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-64 left-8'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute top-80 left-10'
      />
      {/*  */}
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute top-60 left-1/2'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute top-96 left-1/2'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute bottom-72 right-8'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute top-96 left-2/3'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-96 right-14'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute bottom-96 left-52'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-72 left-56'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-44 left-2/3'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute bottom-44 left-48'
      />
      {/*  */}
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-40 left-8'
      />
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute bottom-60 left-10'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-[470] left-8'
      />
      {/*  */}
      <Image
        source={chatIcon}
        resizeMode="contain"
        className='absolute bottom-[370] left-8'
      />
      <Image
        source={heartIcon}
        resizeMode="contain"
        className='absolute bottom-80 left-8'
      />
    </View>
  )
}