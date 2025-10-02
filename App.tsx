import { StatusBar } from 'expo-status-bar';
import "./global.css";
import GetStarted from './screens/(auth)/get-started';
import Login from './screens/(auth)/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/(tabs)/_layout';

export type RootStackParamList = {
  GetStarted: undefined;
  Login: undefined;
  Home: undefined;
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
