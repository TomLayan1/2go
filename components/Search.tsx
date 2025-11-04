import { Image, TextInput, View } from "react-native";

// Search icon
const SearchIcon = require('../assets/icons/search.png')

export default function Search() {

  return (
    <View className="w-full text-white bg-white/20 border border-white/30 rounded-2xl flex-row items-center px-3 gap-3 mb-5">
      <Image
        source={SearchIcon}
        style={{ width: 13, height: 13 }}
        resizeMode="contain"
      />
      <TextInput
        className='flex-1 py-3 text-white text-[17px] rounded-2xl'
        placeholder="Search..."
        placeholderTextColor="#ffffff"
      />
    </View>
  )
}