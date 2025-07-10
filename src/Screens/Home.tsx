// src/screens/HomeScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  useTheme,
  Button,
  TextInput,
  Chip,
  ScreenWrapper,
  Toast,
  Alert,
} from 'react-native-lite-ui';

const Home = () => {
  const { themeMode, setThemeMode } = useTheme();

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Welcome to Lite UI Template✨</Text>

        {/* Introduction */}
        <Text style={styles.subtitle}>
          A powerful and minimalist UI template for React Native developers. It helps you
          build beautiful, consistent apps faster — with theming, Fonts and reusable components out of the box.
        </Text>
        <Text colored mode='bold' fontSize='large' style={{textAlign:"center"}}>
         Just edit the app.tsx file to change fonts and theming
        </Text>

        {/* Package Info */}
        <Text style={styles.sectionHeading}>🚀 What's Inside</Text>
        <Text style={styles.paragraph}>
          • Pre-installed & pre-configured libraries:
        </Text>
        <Text style={styles.bullet}>✓ React Navigation (Stack+Bottom Tab+Drawer)</Text>
        <Text style={styles.bullet}>✓ react-native-vector-icons</Text>
        <Text style={styles.bullet}>✓ react-native-async-storage/async-storage</Text>
        <Text style={styles.bullet}>✓ axios</Text>
        <Text style={styles.bullet}>✓ react-native-reanimated</Text>
        <Text style={styles.bullet}>✓ react-native-lite-ui</Text>

        <Text style={styles.paragraph}>
          With this template, you save hours of boilerplate setup and focus directly on your app!
        </Text>

        {/* Theme Toggle */}
        <View style={styles.section}>
          <Button
            title={`Switch to ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`}
            onPress={toggleTheme}
          />
        </View>

        {/* Component Showcase */}
        <Text style={styles.sectionHeading}>🎨 Component Preview</Text>

        <Text style={styles.label}>Text Input</Text>
        <TextInput placeholder="Type something..." style={styles.input} />

        <Text style={styles.label}>Button</Text>
        <Button title="Show Toast" onPress={() => {
           Toast.show({
            type:"info",
            message:"This is a info toast"
          })
        }} style={styles.button} />
        <Button title="Show Alert" onPress={() => {
           Alert.show({
            heading:"Alert",
            type:"info",
            message:"This is a info Alert"
          })
        }} style={styles.button} />

        <Text style={styles.label}>Chips</Text>
        <View style={styles.chipContainer}>
          <Chip title="Chip 1" />
          <Chip title="Chip 2" />
          <Chip title="Selected" type="contained" />
        </View>

        {/* Explore Components CTA */}
        <View style={styles.footer}>
          <Button
            title="Explore react-native-lite-ui →"
            onPress={() => {
             
              // Navigate to component showcase screen
            }}
            type="outline"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 8,
    color: '#444',
  },
  bullet: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 4,
  },
  section: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Home;
