import { Tabs, usePathname } from "expo-router";
import { Image, View } from "react-native";

// icons
const StoriesIcon = require("../../assets/icons/stories.png");
const CallIcon = require("../../assets/icons/phone.png");
const ChatRightIcon = require("../../assets/icons/chat-right.png");
const ChatLeftIcon = require("../../assets/icons/chat-left.png");
const CommunitiesIcon = require("../../assets/icons/communities.png");
const SettingsIcon = require("../../assets/icons/settings.png");

export default function RootLayout() {
  const pathName = usePathname();

  // Hide bottom tab in chat details [id].tsx
  const hideBtmTab = /^\/\d+$/.test(pathName);

  return (
    <Tabs
      initialRouteName="(Chats)"
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            backgroundColor: "#0b304a",
            borderTopWidth: 0.4,
            height: 76,
            paddingTop: 2
          },
          hideBtmTab ? { display: "none" } : null,
        ],
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffffaa",
      }}
    >
      <Tabs.Screen
        name="Stories"
        options={{
          title: "Stories",
          tabBarIcon: () => (
            <Image
              source={StoriesIcon}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Calls"
        options={{
          title: "Calls",
          tabBarIcon: () => (
            <Image
              source={CallIcon}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(Chats)"
        options={{
          title: "Chats",
          tabBarIcon: () => (
            <View className="relative">
              <Image
                source={ChatLeftIcon}
                resizeMode="contain"
                className="w-7 h-7 absolute -top-[1] -left-[1]"
              />
              <Image
                source={ChatRightIcon}
                resizeMode="contain"
                className="w-7 h-7"
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Communities"
        options={{
          title: "Communities",
          tabBarIcon: () => (
            <Image
              source={CommunitiesIcon}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(Settings)"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Image
              source={SettingsIcon}
              resizeMode="contain"
              className="w-7 h-7"
            />
          ),
        }}
      />
    </Tabs>
  );
}
