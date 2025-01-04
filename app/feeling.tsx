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

export default function FeelingPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace('/(tabs)'); // Navigeren naar tabs
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Achtergrondafbeelding als parent-container */}
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <View style={styles.container}>
          {/* Titel */}
          <Text style={styles.title}>How do you feel today?</Text>

          <View style={styles.emojiContainer}>
  {/* Eerste Rij */}
  <View style={styles.row}>
    <Image source={Happy} style={styles.emoji} />
  </View>

  {/* Tweede Rij (2 emoji's) */}
  <View style={styles.row}>
    <Image source={Sad} style={styles.emoji} />
    <Image source={Spectacular} style={styles.emoji} />
  </View>

  {/* Derde Rij (2 emoji's) */}
  <View style={styles.row}>
    <Image source={Good} style={styles.emoji} />
    <Image source={Angry} style={styles.emoji} />
  </View>

  {/* Vierde Rij */}
  <View style={styles.row}>
    <Image source={Upset} style={styles.emoji} />
  </View>
</View>

          {/* Continue Knop */}
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
    flex: 1, // Zorgt ervoor dat de achtergrond de volledige ruimte gebruikt
    resizeMode: 'cover', // Bedekt het volledige scherm zonder vervorming
    position: 'absolute', // Plaatst de afbeelding achter alle content
    width: '100%', // Volledige breedte
    height: '100%', // Volledige hoogte
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
    fontSize: 36, // Grotere titel
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
    marginVertical: 10, // Ruimte tussen de rijen
  },
  rowOffset1: {
    alignSelf: 'flex-start', // Verschuif de rij naar links
    marginLeft: 30, // Extra ruimte vanaf de linkerkant
  },
  rowOffset2: {
    alignSelf: 'flex-end', // Verschuif de rij naar rechts
    marginRight: 30, // Extra ruimte vanaf de rechterkant
  },
  emoji: {
    width: 100,
    height: 100,
    marginHorizontal: 10, // Ruimte tussen emoji's in dezelfde rij
  },
    emojiTop: {
      width: 110,
      height: 110,
      marginBottom: 10,
    },
    emojiBottom: {
      width: 110,
      height: 110,
      marginTop: 10,
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
    marginTop: 20, // Ruimte boven de knop
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});