import React, { useEffect } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { API_URL } from '../constants/Api'; // Zorg dat deze URL naar je backend verwijst
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKGROUND_IMAGE = require('../assets/images/background.png');

export default function LoginScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        router.replace('/(tabs)');
      }
    };

    checkLogin();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const authUrl = `${API_URL}/auth/google`;
      const redirectUrl = AuthSession.makeRedirectUri();

      console.log('Auth URL:', authUrl);
      console.log('Redirect URL:', redirectUrl);

      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);

      if (result.type === 'success' && result.url) {
        // Handle the redirect URL
        const params = new URL(result.url).searchParams;

        // Extract user ID or other parameters (e.g., tokens, profile data)
        const user = params.get('user'); // Replace with the correct parameter from your server's redirect URL

        if (user) {
          // Save user ID to AsyncStorage
          await AsyncStorage.setItem('userId', user);

          // Navigate to the feeling screen
          router.replace('/feeling');
        } else {
          throw new Error('User ID not found in the redirect URL');
        }
      } else {
        throw new Error('Google login was not successful');
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      Alert.alert('Login failed. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Moody</Text>
          <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});