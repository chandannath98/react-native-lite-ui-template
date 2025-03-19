import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { ScreenWrapper , Text} from 'react-native-lite-ui'

export default function About() {
  return (
    <ScreenWrapper>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text fontSize='extraExtraLarge' colored>About</Text>
    </View>
  </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})