import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Card from '@/components/Card'; // Zorg ervoor dat je Card component geïmporteerd is

export default function DiaryScreen() {
  // Lijst van de items voor de DiaryScreen
  const items = [
    'Moodchart this week', 'Mood counter', 'Quote', 'Moodchart this month'
  ];

  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>Diary</ThemedText>

      {/* ScrollView voor horizontaal scrollen */}
      <ScrollView
        contentContainerStyle={styles.grid}  // Zorgt voor horizontale uitlijning van de kaarten en het in meerdere rijen plaatsen
        showsHorizontalScrollIndicator={false}  // Verbergt de horizontale scrollbar
      >
        {/* Moodchart this week kaart neemt de volledige breedte */}
        <View style={styles.fullWidthCard}>
          <Card text="Moodchart this week" />
        </View>

        {/* Mood counter en Quote kaarten worden naast elkaar op de tweede rij */}
        <View style={styles.row}>
          <Card text="Mood counter" />
          <Card text="Quote" />
        </View>

        {/* Moodchart this month kaart komt op de derde rij */}
        <View style={styles.fullWidthCard}>
          <Card text="Moodchart this month" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,  // Dit zorgt ervoor dat er geen padding aan de zijkanten is
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF',  // Zorg ervoor dat de titel wit is
  },
  grid: {
    // Zorg ervoor dat de kaarten niet breder zijn dan het scherm
    flexDirection: 'row',  // De kaarten moeten horizontaal naast elkaar staan
    flexWrap: 'wrap',      // Hiermee kunnen de kaarten over meerdere rijen gaan
    justifyContent: 'space-between',  // Dit zorgt ervoor dat de kaarten mooi verdeeld zijn
    width: '100%',  // Zorg ervoor dat de container de volledige breedte van het scherm gebruikt
  },
  row: {
    flexDirection: 'row',  // Dit zorgt ervoor dat de kaarten op dezelfde rij komen
    justifyContent: 'space-between',  // Zorgt voor ruimte tussen de kaarten
    width: '100%',  // Zorgt ervoor dat de kaarten binnen de container passen
    marginBottom: 16,  // Ruimte tussen de rijen
  },
  fullWidthCard: {
    width: '100%',  // Zorgt ervoor dat de kaart de volledige breedte van het scherm gebruikt
    marginBottom: 16,  // Ruimte tussen de rijen
  },
});
