import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../constants/Api';

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
      // Gebruik de juiste API_URL vanuit constants
      const authUrl = `${API_URL}/auth/google`;
  
      // Gebruik de Expo functie om een redirect URI te maken
      const redirectUri = AuthSession.makeRedirectUri();
  
      console.log('Auth URL:', authUrl);
      console.log('Redirect URL:', redirectUri);
  
      // Start de Google login sessie
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);
  
      if (result.type === 'success' && result.url) {
        // Haal parameters uit de URL
        const params = new URL(result.url).searchParams;
        const user = params.get('user'); // Pas dit aan op basis van je backend response
  
        if (user) {
          // Sla de gebruiker-ID op in AsyncStorage
          await AsyncStorage.setItem('userId', user);
  
          // Navigeer naar de 'feeling' pagina
          router.replace('/feeling');
        } else {
          throw new Error('User ID not found in the redirect URL');
        }
      } else {
        Alert.alert('Authentication canceled or failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to authenticate with Google');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.logo}>MOODY</Text>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.subText}>Log in to continue</Text>

          {/* Form Fields */}
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />

          {/* Sign-Up Button */}
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          {/* Social Media Login */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialText}>F</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
              <Text style={styles.socialText}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialText}>X</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 12,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25292e',
  },
  orText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});