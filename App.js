import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './pages/home'
import Stations from './pages/stations'
import Grille from './pages/stations/grille'
import Jazzmans from './pages/stations/jazzmans'
import SubConnect from './pages/stations/subconnect'
import Tres from './pages/stations/tres'
import Checkout from './pages/checkout'
import Coffee from './pages/stations/jazzmans/coffee'
import Tea from './pages/stations/jazzmans/tea'
import Breakfast from './pages/stations/jazzmans/breakfast'
import BakedGoods from './pages/stations/jazzmans/bakedgoods'

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
      <Stack.Screen name="Coffee" component={Coffee} />
      <Stack.Screen name="Tea" component={Tea} />
      <Stack.Screen name="Breakfast" component={Breakfast} />
      <Stack.Screen name="Baked Goods" component={BakedGoods} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
