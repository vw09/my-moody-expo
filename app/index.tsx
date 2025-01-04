import { View, Alert, SafeAreaView, TouchableOpacity, Image, StyleSheet, Platform, TextInput, Text } from 'react-native';
import { useEffect } from 'react';
import { API_URL } from '@/constants/Api';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        router.replace('/feeling');
      }
    };
    checkLogin();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const authUrl = `${API_URL}/auth/google`;
      const redirectUrl = AuthSession.makeRedirectUri();

      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);

      console.log(result);

      if (result.type === 'success') {
        const params = new URL(result.url).searchParams;

        const user = params.get('user');
        console.log(user);
        if (user) {
          await AsyncStorage.setItem('userId', user);
          router.replace('/feeling');
        }
      } else {
        Alert.alert('Authentication canceled or failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to authenticate with Google');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <Text style={styles.logoText}>
          MO<Text style={styles.logoCircle}>O</Text>DY
        </Text>

        {/* Welcome message */}
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>

        {/* Input fields */}
        <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#000" />
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#000" />
        <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#000" secureTextEntry />

        {/* Log In button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>LOG IN</Text>
        </TouchableOpacity>

        {/* OR separator */}
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Google login */}
        <View style={styles.googleContainer}>
          <TouchableOpacity style={styles.googleTextButton} onPress={handleGoogleLogin}>
            <Text style={styles.googleTextButtonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#292929',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  logoCircle: {
    color: '#FFD700',
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFF',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAA',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: 16,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 18,
    color: '#292929',
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AAA',
  },
  orText: {
    marginHorizontal: 10,
    color: '#AAA',
    fontSize: 16,
  },
  googleContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  googleTextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A6A47', // Donkerdere groen voor betere zichtbaarheid
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  googleTextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});