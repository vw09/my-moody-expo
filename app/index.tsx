import React from 'react';
import { View, Alert, TextInput, StyleSheet, Button, ScrollView, } from 'react-native';
import { useEffect } from 'react';
import {API_URL} from '@/constants/Api';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const BACKGROUND_IMAGE = require('../assets/images/background.jpg');


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
    
          const result =  await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
    
          if (result.type === 'success' && result.url) {
              // Handle the redirect URL
              const params = new URL(result.url).searchParams;
    
              // Extract user ID or other parameters (e.g., tokens, profile data)
              const user = params.get('user'); // Replace with the correct parameter from your server's redirect URL
              if (user) {
                  // Store the user ID
                  await AsyncStorage.setItem('userId', user);
    
                  // Navigate to tabs after successful login
                  router.replace('/(tabs)');
              }
          } else {
              Alert.alert('Authentication canceled or failed');
          }
    
      } catch (error) {
          console.log(error);
          Alert.alert('Error', 'Failed to authenticate with Google');
      }
    }

    return (
        <View style={styles.container}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} />
          <Button title="Sign Up" onPress={() => { /* Voeg hier Sign-up logica toe */ }} />
          <Button title="Login with Google" onPress={handleGoogleLogin} color="#4285F4" />
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#25292e',
      padding: 20,
    },
    input: {
      width: '80%',
      marginVertical: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 20,
    },
  });
