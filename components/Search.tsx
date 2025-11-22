import { Image, TextInput, View } from "react-native";
import { FRIENDS } from "../data";
import { useState } from "react";
import { use2goStore } from "../goStore";

// Search icon
const SearchIcon = require('../assets/icons/search.png')

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { filterFriends, friendList } = use2goStore();
  
  const handleSearch = (inputValue: string) => {
    filterFriends(inputValue);
    setSearchInput(inputValue);
  }

  return (
    <View className="w-full text-white bg-white/10 border border-white/15 rounded-2xl flex-row items-center px-3 gap-3 mb-2">
      <Image
        source={SearchIcon}
        style={{ width: 13, height: 13 }}
        resizeMode="contain"
      />
      <TextInput
        className='flex-1 py-3 text-white rounded-2xl'
        placeholder="Search..."
        placeholderTextColor="#989898"
        value={searchInput}
        onChangeText={handleSearch}
      />
    </View>
  )
}

