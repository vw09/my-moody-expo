import React, { useEffect } from 'react';  // Zorg ervoor dat useEffect geïmporteerd wordt
import { View, Alert, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { API_URL } from '@/constants/Api'; // Zorg ervoor dat deze URL correct is
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import useMessages from '@/data/messages';

// Achtergrondafbeelding
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

  // Functie om in te loggen via Google
  const handleGoogleLogin = async () => {
    try {
      const redirectUrl = AuthSession.makeRedirectUri();
      const authUrl = `${API_URL}/auth/google`; // Zorg ervoor dat de API URL correct is

      // Open de Google Auth WebBrowser sessie
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);

      if (result.type === 'success' && result.url) {
        // Als de login succesvol is, verwerk de response URL
        const params = new URL(result.url).searchParams;
        
        // Haal de user ID op uit de URL params
        const user = params.get('user'); // Dit moet overeenkomen met de naam die je server retourneert

        if (user) {
          // Sla de userId op in AsyncStorage
          await AsyncStorage.setItem('userId', user);

          // Navigeren naar de feeling pagina
          //router.replace('/feeling');
        }
      } else {
        Alert.alert('Authentication canceled or failed');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to authenticate with Google');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <View style={styles.container}>
          {/* Titel en beschrijving */}
          <Text style={styles.subtitle}>Welcome!</Text>
          <Text style={styles.description}>Log in to continue</Text>

          {/* Formulier voor gebruikersinvoer */}
          <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#000" />
          <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#000" />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#000" />

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

          {/* Google Login knop */}
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