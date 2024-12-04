import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  const genres = [
    'Pop', 'Rock', 'Metal', 'Electronic', 'Hip Hop', 'Rap', 'R&B', 
    'Soul', 'Funk', 'Jazz', 'Blues', 'Country', 'Reggae', 
    'Klassiek', 'Latin', 'Gospel', 'Folk', 'World Music', 'Opera'
  ];

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
