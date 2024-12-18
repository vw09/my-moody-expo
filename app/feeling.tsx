import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

// Importeer afbeeldingen
const Good = require('@/assets/images/good.png');
const Happy = require('../assets/images/happy.png');
const Sad = require('../assets/images/sad.png');
const Angry = require('../assets/images/angry.png');
const Spectacular = require('../assets/images/spectaculair.png');
const Upset = require('../assets/images/upset.png');

export default function FeelingPage() {
  const router = useRouter(); // Router om te navigeren

  // Functie om naar de tabs homepagina te gaan
  const handleContinue = () => {
    router.replace('/(tabs)'); // Vervang de huidige pagina door de tabs homepagina
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Titel */}
        <Text style={styles.title}>How do you feel today?</Text>

        {/* Emoji's */}
        <View style={styles.emojiContainer}>
          <Image source={Happy} style={styles.emoji} />
          <Image source={Sad} style={styles.emoji} />
          <Image source={Spectacular} style={styles.emoji} />
          <Image width={80} height={80} source={Good} style={styles.emoji} />
          <Image source={Angry} style={styles.emoji} />
          <Image source={Upset} style={styles.emoji} />
        </View>

        {/* Continue Knop */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#EAEAEA', // Zachter wit
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Ruimte aan de zijkanten
  },
  emoji: {
    width: 80,
    height: 80,
    margin: 10,
  },
  continueButton: {
    backgroundColor: '#3C3C3C',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 3, // Schaduw op Android
    shadowColor: '#000', // Schaduw op iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  continueText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});