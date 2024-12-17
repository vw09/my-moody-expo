import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


const Neutral = require('../assets/images/neutral.png');
const Happy = require('../assets/images/happy.png');
const Sad = require('../assets/images/sad.png');
const Angry = require('../assets/images/angry.png');
const Excited = require('../assets/images/excited.png');


export default function FeelingPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Titel */}
        <Text style={styles.title}>How do you feel today?</Text>

        {/* Emoji's */}
        <View style={styles.emojiContainer}>
          <Image source={Happy} style={styles.emoji} />
          <Image source={Sad} style={styles.emoji} />
          <Image source={Excited} style={styles.emoji} />
          <Image source={Neutral} style={styles.emoji} />
          <Image source={Angry} style={styles.emoji} />
        </View>

        {/* Continue Knop */}
        <TouchableOpacity style={styles.continueButton}>
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
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
  },
  emojiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // Ruimte tussen emoji's
  },
  emoji: {
    width: 80,
    height: 80,
    margin: 10,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});