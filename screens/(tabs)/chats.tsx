import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Search from "../../components/Search"
import Friends from "../../components/Friends"
import { useState } from "react"

export default function Chats() {
  const [section, setSection] = useState<string>("Online")
  return(
    <SafeAreaView className='bg-[#0b304a] flex-1 pt-5 px-6'>
      <Search />
      <Friends section={section} setSection={setSection} />
    </SafeAreaView>
  )
}