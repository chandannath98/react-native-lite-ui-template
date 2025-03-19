import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './BottomTabNavigation';

export default function StackNavigation() {

    const Stack =createStackNavigator()

  return (
    <NavigationContainer>
    <Stack.Navigator>
   <Stack.Screen 
   options={{
     headerShown:false
   }}
   
   name="MyTabs" component={MyTabs} />
 
   </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})