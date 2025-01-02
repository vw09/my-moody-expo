import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';

// Voorbeeld: Context om de gebruikerstoestand te beheren
const AuthContext = React.createContext({ name: 'Sarah' });

// Functie om de dag van het jaar te berekenen
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime() + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Quotes lijst
const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Happiness is a journey, not a destination.",
  "Be the change you wish to see in the world.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it."
];

// Voeg je achtergrondafbeelding toe
const BACKGROUND_IMAGE = require('@/assets/images/background2.png');

export default function DiaryScreen() {
  const { name } = useContext(AuthContext); // Haal de naam van de gebruiker op via context

  // Bereken de quote van de dag
  const dayOfYear = getDayOfYear();
  const quoteOfTheDay = quotes[dayOfYear % quotes.length]; // Gebruik modulo om de index te beperken

  return (
    <ImageBackground
      source={BACKGROUND_IMAGE}
      style={styles.background}
      resizeMode="cover" // Zorg dat de afbeelding de container bedekt
    >
      <View style={styles.overlay}>
        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Titel */}
          <Text style={styles.title}>Diary of {name}</Text>

          {/* Eerste Rij */}
          <View style={[styles.card, styles.fullWidthCard]}>
            <Text style={styles.cardText}>Moodchart this week</Text>
          </View>

          {/* Tweede Rij */}
          <View style={styles.row}>
            <View style={[styles.card, styles.halfWidthCard]}>
              <Text style={styles.cardText}>Mood counter</Text>
            </View>
            <View style={[styles.card, styles.halfWidthCard, styles.quoteCard]}>
              <Text style={styles.quoteText}>{quoteOfTheDay}</Text>
            </View>
          </View>

          {/* Derde Rij */}
          <View style={[styles.card, styles.fullWidthCard]}>
            <Text style={styles.cardText}>Moodchart this month</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Donkere overlay voor betere leesbaarheid
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
  },
  fullWidthCard: {
    width: '100%',
    height: 120,
  },
  halfWidthCard: {
    width: '48%',
    height: 120,
  },
  cardText: {
    color: '#8C8C8C',
    fontSize: 16,
    textAlign: 'center',
  },
  quoteCard: {
    backgroundColor: '#A3BB91', // Groenachtige achtergrondkleur voor de Quote Section
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});