import React from 'react';
import { View, Alert, StyleSheet, ScrollView, } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import {API_URL} from '@/constants/Api';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';



export default function Index() {
  const genres = [
    'Pop', 'Rock', 'Metal', 'Electronic', 'Hip Hop', 'Rap', 'R&B', 
    'Soul', 'Funk', 'Jazz', 'Blues', 'Country', 'Reggae', 
    'Klassiek', 'Latin', 'Gospel', 'Folk', 'World Music', 'Opera'
  ];

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
      <ThemedText type="title" style={styles.title}>Your choice</ThemedText>

      {/* ScrollView voor horizontaal scrollen */}
      <ScrollView
        contentContainerStyle={styles.grid} // Dit zorgt ervoor dat de items in de ScrollView goed worden uitgelijnd
        horizontal={true} // Zet horizontale scrollen aan
        showsHorizontalScrollIndicator={false} // Verbergt de horizontale scrollbar
      >
        {genres.map((genre, index) => (
          <Card key={index} text={genre} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF', // Zorg ervoor dat de titel wit is
  },
  grid: {
    flexDirection: 'row', // Zorgt voor horizontale uitlijning van de kaarten
    paddingLeft: 8, // Voeg ruimte toe aan de linkerzijde
    paddingRight: 8, // Voeg ruimte toe aan de rechterzijde
  },
});
