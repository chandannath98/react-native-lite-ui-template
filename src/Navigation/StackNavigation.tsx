import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import About from '../Screens/About';

export default function StackNavigation() {

    const Stack =createStackNavigator()

  return (
    <NavigationContainer>
   <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="About" component={About} />

  </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})