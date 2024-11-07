import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lista de Trabajadores' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalles del Trabajador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
