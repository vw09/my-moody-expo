import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

// Achtergrondafbeelding
const BACKGROUND_IMAGE = require('../assets/images/background2.png');

// Emoji afbeeldingen
const Good = require('../assets/images/good.png');
const Happy = require('../assets/images/happy.png');
const Sad = require('../assets/images/sad.png');
const Angry = require('../assets/images/angry.png');
const Spectacular = require('../assets/images/spectaculair.png');
const Upset = require('../assets/images/upset.png');

// Functie voor het opslaan van de stemming
const saveMood = async (mood: string) => {
  try {
    const response = await fetch('http://<SERVER_URL>/moods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: '12345', // Hier komt de ingelogde gebruiker-ID
        mood: mood,
        description: `Feeling ${mood}`, // Optionele beschrijving
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save mood');
    }

    console.log('Mood saved successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error saving mood:', error.message);
    } else {
      console.error('Error saving mood:', error);
    }
  }
};

export default function FeelingPage() {
  const router = useRouter();

  const handleMoodSelection = async (mood: string) => {
    await saveMood(mood); // Opslaan van stemming in de database
    router.replace('/(tabs)'); // Navigeren naar tabs
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Achtergrondafbeelding als parent-container */}
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <View style={styles.container}>
          {/* Titel */}
          <Text style={styles.title}>How do you feel today?</Text>

          {/* Emoji's */}
          <View style={styles.emojiContainer}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleMoodSelection('happy')}>
                <Image source={Happy} style={styles.emoji} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleMoodSelection('sad')}>
                <Image source={Sad} style={styles.emoji} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMoodSelection('spectacular')}>
                <Image source={Spectacular} style={styles.emoji} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleMoodSelection('good')}>
                <Image source={Good} style={styles.emoji} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMoodSelection('angry')}>
                <Image source={Angry} style={styles.emoji} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleMoodSelection('upset')}>
                <Image source={Upset} style={styles.emoji} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Continue Knop */}
          <TouchableOpacity style={styles.continueButton} onPress={() => router.replace('/(tabs)')}>
            <Text style={styles.continueText}>continue</Text>
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
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  emojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emoji: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  continueButton: {
    backgroundColor: '#3C3C3C',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 20,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});