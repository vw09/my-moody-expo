import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { API_URL } from '@/constants/Api';

// Achtergrondafbeelding
const BACKGROUND_IMAGE = require('../assets/images/background2.png');

const emojiData = [
  { name: 'Happy', image: require('../assets/images/happy.png') },
  { name: 'Sad', image: require('../assets/images/sad.png') },
  { name: 'Angry', image: require('../assets/images/angry.png') },
  { name: 'Spectaculair', image: require('../assets/images/spectaculair.png') },
  { name: 'Good', image: require('../assets/images/good.png') },
  { name: 'Upset', image: require('../assets/images/upset.png') }
];

// Functie voor het opslaan van de stemming
const saveMood = async (mood: string) => {
  try {
    const response = await fetch(`${API_URL}/moods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: '637f72c58c5aab5f8f68f0c9',  // Dit moet de juiste ObjectId van de ingelogde gebruiker zijn
        mood: mood.toLowerCase(),  // Zorg ervoor dat de mood in kleine letters is
        description: `Feeling ${mood}`,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error Response:', errorResponse);
      throw new Error('Failed to save mood');
    }

    const data = await response.json();
    console.log('Mood saved:', data);
    return data;
  } catch (error) {
    console.error('Save Mood Error:', error);
    return null;
  }
};

export default function FeelingPage() {
  const router = useRouter();

  const handleMoodSelection = async (mood: string) => {
    console.log(`Selected mood: ${mood}`);  // Log de geselecteerde mood
    const savedMood = await saveMood(mood); // Opslaan van stemming in de database
  
    if (savedMood) {
      router.replace('/(tabs)'); // Navigeren naar tabs als de mood succesvol is opgeslagen
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <Text style={styles.title}>How do you feel today?</Text>
        <View style={styles.emojiContainer}>
          {emojiData.map((emoji, index) => (
            <TouchableOpacity key={index} style={styles.emojiWrap} onPress={() => handleMoodSelection(emoji.name)}>
              <Image source={emoji.image} style={styles.emoji} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  emojiWrap: {
    margin: 10,
    width: 70,
    height: 70,
  },
  emoji: {
    width: '100%',
    height: '100%',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  continueText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});