import { TextInput, View } from "react-native";

// Search icon
import SearchIcon from '../assets/icons/search.svg'

export default function Search() {

  return(
    <View className="w-full text-white bg-white/20 border border-white/30 rounded-2xl flex-row items-center px-3 gap-3 mb-5">
      <SearchIcon />
      <TextInput
        className='flex-1 py-5 text-white text-[17px] rounded-2xl'
        placeholder="Search..."
        placeholderTextColor="#ffffff"
      />
    </View>
  )
}