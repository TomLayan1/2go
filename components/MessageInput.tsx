import { Image, TextInput, View } from "react-native";
import { useState } from "react";

// icons
const Cross = require('../assets/icons/cross.png')
const Docs = require('../assets/icons/docs.png')
const Mic = require('../assets/icons/mic.png')
const Camera = require('../assets/icons/camera.png')


export default function MessageInput () {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {}

  return (
    <View>
      <View className="bg-[#39576b] w-full flex-row items-center px-4 pt-2 pb-6 gap-4">
        <Image source={Cross} alt="Cross" />
        <View className="flex-1 flex-row items-center gap-4 border border-white rounded-full px-4">
          <TextInput
            className="flex-1 text-[16px] text-white"
            placeholder="Message"
            placeholderTextColor="#ffffff"
            value={message}
            onChangeText={setMessage}
            returnKeyType="send"
            onSubmitEditing={handleSendMessage}
          />
          <Image source={Docs} alt="Docs" />
        </View>
        <Image source={Camera} alt="Camera" />
        <Image source={Mic} alt="Microphone" />
      </View>
    </View>
  )
}