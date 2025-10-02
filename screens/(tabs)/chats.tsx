import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Search from "../../components/search"
import Friends from "../../components/friends"

export default function Chats() {
  return(
    <SafeAreaView className='bg-[#0b304a] flex-1 pt-5 px-6'>
      <Search />
      <Friends />
    </SafeAreaView>
  )
}