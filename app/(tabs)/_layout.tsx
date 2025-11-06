import { Tabs, usePathname } from "expo-router";
import { Image } from "react-native";

// icons
const StoriesIcon = require("../../assets/icons/stories.png");
const CallIcon = require("../../assets/icons/phone.png");
const ChatRightIcon = require("../../assets/icons/chat-right.png");
const CommunitiesIcon = require("../../assets/icons/communities.png");
const SettingsIcon = require("../../assets/icons/settings.png");

export default function RootLayout() {
  const pathName = usePathname();
  console.log(pathName)

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
          tabBarIcon: ({ color, size }) => (
            <Image
              source={StoriesIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={CallIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(Chats)"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ChatRightIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={CommunitiesIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(Settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={SettingsIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
