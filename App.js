import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeScreen from './pages/home'
import Stations from './pages/stations'
import Grille from './pages/stations/grille'
import Jazzmans from './pages/stations/jazzmans'
import SubConnect from './pages/stations/subconnect'
import Tres from './pages/stations/tres'
import Checkout from './pages/checkout'
import Profile from './pages/profile';
import Payment from './pages/payment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Stations" component={Stations} />
      <Stack.Screen name="The Grille" component={Grille} />
      <Stack.Screen name="Jazzman's Cafe & Bakery" component={Jazzmans} />
      <Stack.Screen name="SubConnections" component={SubConnect} />
      <Stack.Screen name="Tres Habeneros" component={Tres} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
