import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "./chats"; // chat list
import ChatDetail from "./[id]"; // chat detail screen

const Stack = createNativeStackNavigator();

export default function ChatLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatsList" component={Chats} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  );
}
