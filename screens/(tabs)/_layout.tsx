import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stories from './stories';
import Calls from './calls';
import Chats from './chats';
import Communities from './communities';
import Settings from './settings';



// icons
import StoriesIcon from '../../assets/icons/stories.svg';
import CallIcon from '../../assets/icons/phone.svg';
import ChatLeftIcon from '../../assets/icons/chat-left.svg'
import ChatRightIcon from '../../assets/icons/chat-right.svg'
import Communitiesicon from '../../assets/icons/communities.svg';
import SettingsIcon from '../../assets/icons/settings.svg'


const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
      <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b304a",
          borderTopWidth: 0.5,
          height: 85,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffff",
      })}
      >
        <Tab.Screen
          name="Stories"
          component={Stories}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <StoriesIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Calls"
          component={Calls}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CallIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Chats"
          component={Chats}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ChatLeftIcon width={size} height={size} fill={color} />
              // <ChatRightIcon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Communities"
          component={Communities}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Communitiesicon width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SettingsIcon width={size} height={size} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};