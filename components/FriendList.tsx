import { Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Card from "./Card";

type FriendsPropType = {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export default function FriendList({ section, setSection }: FriendsPropType) {
  const AVAILABILITY = [
    {
      id: 1,
      status: "Online"
    },
    {
      id: 2,
      status: "Away"
    },
    {
      id: 3,
      status: "Offline"
    }
  ]

  // Toggle between online, away and offline
  const toggleAvailability = (id: number) => {
    const currentSection = AVAILABILITY?.find(item => item.id === id);
    currentSection && setSection(currentSection.status)
  }

  return (
    <View className="flex-1">
      <View className="w-full py-4 px-2 flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-7">
          {AVAILABILITY?.map(item => (
            <Pressable
              onPress={() => toggleAvailability(item.id)}
              key={item.id}
              className="items-center"
            >
              <Text
                className={`${section === item.status && section === "Online"
                  ? "text-[#3abd43]"
                  : section === item.status && section === "Away"
                    ? "text-[#ab922c]"
                    : section === item.status && section === "Offline"
                      ? "text-[#a6a6a6]"
                      : "text-[#607182]"
                  } text-[15px]`}
              >
                {item.status}
              </Text>
              <Ionicons
                name="ellipse"
                size={7}
                color={`${section === item.status && section === "Online"
                  ? "#3abd43"
                  : section === item.status && section === "Away"
                    ? "#ab922c"
                    : section === item.status && section === "Offline"
                      ? "#a6a6a6"
                      : "#607182"
                  }`}
              />
            </Pressable>
          ))}
        </View>
        <Ionicons name="menu" size={19} color={"#607182"} />
      </View>
      <Card section={section} />
    </View>
  )
}