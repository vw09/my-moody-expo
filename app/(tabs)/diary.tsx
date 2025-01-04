import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Zorg dat expo-linear-gradient is geïnstalleerd

// Mood data simuleren
const moodData = {
  weeklyChart: 'Weekly mood graph placeholder.',
  moodCounter: { Happy: 12, Sad: 8, Angry: 4 },
  monthlyChart: 'Monthly mood graph placeholder.',
};

// Quotes lijst
const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Happiness is a journey, not a destination.",
  "Be the change you wish to see in the world.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

export default function DiaryScreen() {
  const quoteOfTheDay = quotes[new Date().getDay() % quotes.length];

  return (
    <LinearGradient
      colors={['#1A1F1A', '#000']} // Omgekeerde gradient: Groen boven, zwart onder
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Titel */}
        <Text style={styles.title}>Mood Diary</Text>

        {/* Moodchart van deze week */}
        <TouchableOpacity style={[styles.card, styles.fullWidthCard]}>
          <Text style={styles.cardTitle}>Moodchart This Week</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>{moodData.weeklyChart}</Text>
          </View>
        </TouchableOpacity>

        {/* Moodcounter en Quote van de Dag */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.card, styles.halfWidthCard]}>
            <Text style={styles.cardTitle}>Mood Counter</Text>
            <View>
              {Object.entries(moodData.moodCounter).map(([mood, count]) => (
                <Text key={mood} style={styles.moodCount}>
                  {mood}: {count}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.halfWidthCard, styles.quoteCard]}>
            <Text style={styles.cardTitle}>Quote of the Day</Text>
            <Text style={styles.quoteText}>{quoteOfTheDay}</Text>
          </TouchableOpacity>
        </View>

        {/* Moodchart van deze maand */}
        <TouchableOpacity style={[styles.card, styles.fullWidthCard]}>
          <Text style={styles.cardTitle}>Moodchart This Month</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>{moodData.monthlyChart}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', // Verticale centrering
    alignItems: 'center', // Horizontale centrering
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 50, // Extra ruimte boven de titel
    marginBottom: 30, // Extra ruimte onder de titel
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#292929',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Voor Android schaduw
  },
  fullWidthCard: {
    width: '100%',
    height: 150,
  },
  halfWidthCard: {
    width: '48%',
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A3C4A1', // Groen voor kaarttitels
    marginBottom: 10,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444', // Donkere placeholder
    width: '90%',
    height: '70%',
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
  moodCount: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  quoteCard: {
    backgroundColor: '#7E956C', // Groenachtige tint zoals de login-knop
    borderWidth: 1,
    borderColor: '#5A7345',
    padding: 10,
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});