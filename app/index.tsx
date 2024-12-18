import React from 'react';
import { View, Alert, TextInput, StyleSheet, Button, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { useEffect } from 'react';
import {API_URL} from '@/constants/Api';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

const BACKGROUND_IMAGE = require('../assets/images/background.png');

export default function LoginScreen() {
    const router = useRouter();

    /*useEffect(() => {
      const checkLogin = async () => {
          const userId = await AsyncStorage.getItem('userId');
          if (userId) {
              router.replace('/feeling');
          }
      };
  
      checkLogin();
  }, []);*/

  const handleLogin = async () => {
    try {
      // Simuleer een inlogactie: je kunt hier echte authenticatie toevoegen
      const mockUserId = '12345'; // Dummy user ID
      await AsyncStorage.setItem('userId', mockUserId);

      // Navigeer naar de Feeling Page
      router.replace('/feeling');
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Login Failed', 'An error occurred during login');
    }
  };


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
                  router.replace('/feeling');
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
    <SafeAreaView style={styles.safeArea}>
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
      <View style={styles.container}>
        {/* Titel en beschrijving */}
        <Text style={styles.subtitle}>Welcome!</Text>
        <Text style={styles.description}>Log in to continue</Text>

        {/* Inputvelden */}
        <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#000" />
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#000" />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#000" />

     
           {/* Submit knop */}
           <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.submitText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Klein blauw linktekstje */}
          <TouchableOpacity>
            <ThemedText type="link" style={styles.smallBlueText}>
              Don't have an account? Sign Up
            </ThemedText>
          </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        {/* Google Login Knop */}
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleText}>G</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
safeArea: {
  flex: 1,
  backgroundColor: '#25292e', // Fallback kleur als de afbeelding niet laadt
},
background: {
  flex: 1,
  resizeMode: 'cover', // Zorgt ervoor dat de afbeelding het volledige scherm bedekt
  justifyContent: 'center',
},
container: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  width: '100%',
},
title: {
  fontSize: 48,
  fontWeight: 'bold',
  color: '#FFF',
  marginBottom: 10,
},
subtitle: {
  fontSize: 32,
  fontWeight: '600',
  color: '#FFF',
  marginBottom: 5,
},
description: {
  fontSize: 16,
  color: '#FFF',
  marginBottom: 30,
},
input: {
  width: '100%',
  height: 50,
  backgroundColor: '#FFF',
  borderRadius: 25,
  paddingHorizontal: 20,
  marginBottom: 15,
  fontSize: 16,
  color: '#000',
  fontWeight: '600',
},
submitButton: {
  backgroundColor: '#A3BB91', 
  borderRadius: 15,           
  borderWidth: 1,             
  borderColor: '#fff',     
  height: 45,                 
  width: '60%',               
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  elevation: 3,               
  shadowColor: '#000',        
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
},
submitText: {
  color: '#FFF',
  fontSize: 16,               
  fontWeight: '600',          
  textTransform: 'uppercase', 
},
smallBlueText: {
  fontSize: 14,
  color: '#0000FF',
  textDecorationLine: 'underline',
},
signupButton: {
  backgroundColor: '#FFF',
  borderRadius: 25,
  height: 50,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},
signupText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#2D2C2C',
},
orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  width: '100%',
},
orLine: {
  flex: 1,
  height: 1,
  backgroundColor: '#FFF',
},
orText: {
  fontSize: 18,
  color: '#FFF',
  marginHorizontal: 10,
},
googleButton: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#FFF',
  justifyContent: 'center',
  alignItems: 'center',
},
googleText: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#2D2C2C',
},
});