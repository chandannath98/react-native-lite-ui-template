import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'react-native-lite-ui';
import { ThemeInitialValues } from 'react-native-lite-ui/src/ThemeContext';
import StackNavigation from './src/Navigation/StackNavigation';

export default function App() {
   const theme:ThemeInitialValues = {
      colors:{
        primary: 'purple',
        secondary: "gray",
        backgroundColor: "blue",
        textColor: "gray"
        // buttonColor: "yellow"
        
    },themesColors: {
      light: {
        primary: '#6200EE',
        backgroundColor: '#FFFFFF',
        textColor: '#000',
        buttonColor: '#03DAC6',
        disabledColor: '#A9A9A9',
      },
      dark: {
        primary: '#BB86FC',
        backgroundColor: '#121212',
        textColor: '#FFFFFF',
        buttonColor: '#03DAC6',
        disabledColor: '#444444',
      },
    },
    fontSizes : {
      extraSmall: 10,   // Very small text (e.g., captions, helper text)
      small: 12,        // Small text (e.g., secondary labels)
      medium: 14,       // Default text (e.g., body text)
      large: 16,        // Slightly larger text (e.g., buttons, headlines)
      extraLarge: 20,   // Important headings or subheadings
      extraExtraLarge: 24, // Main headings or prominent text
    },
    fonts:{
        regular: 'string',
        bold: 'string',
        medium: 'string',
    },
    colorMode:'light'
    };
  return (
    <GestureHandlerRootView style={{flex:1}}>
          <ThemeProvider initialValues={theme}>
      
      <StackNavigation/>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})