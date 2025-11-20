import { Image, TextInput, Pressable, View } from "react-native";
import { useState } from "react";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

// icons
const Cross = require("../assets/icons/cross.png");
const Docs = require("../assets/icons/docs.png");
const Mic = require("../assets/icons/mic.png");
const Camera = require("../assets/icons/camera.png");

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // send message logic…
    setMessage("");
  };

  return (
    <View className="bg-[#39576b] w-full px-4 pt-2 pb-6">
      <Animated.View
        layout={Layout.springify()}
        className="flex-row items-center gap-4"
      >
        {/* Left icon */}
        <Image source={Cross} />

        {/* Input Field */}
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

          {/* Docs icon stays always */}
          <Image source={Docs} />
        </View>

        {/* Right-side icons (Camera + Mic) — hide when typing */}
        {message.length === 0 && (
          <Animated.View
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(120)}
            layout={Layout.springify()}
            className="flex-row items-center gap-4"
          >
            <Image source={Camera} />
            <Image source={Mic} />
          </Animated.View>
        )}

        {/* SEND button — shows only when typing */}
        {message.length > 0 && (
          <Animated.View
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(120)}
            layout={Layout.springify()}
          >
            <Pressable
              onPress={handleSendMessage}
              className="bg-[#3abd43] px-4 py-2 rounded-full"
            >
              <Animated.Text className="text-white text-[16px]">
                Send
              </Animated.Text>
            </Pressable>
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
}
