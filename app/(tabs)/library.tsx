import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Card from '@/components/card';  // Zorg ervoor dat je Card component geïmporteerd is

export default function LibraryScreen() {
  const items = [
    'Playlist', 'Podcast', 'Artist', 'Albums',
  ];

  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>Library</ThemedText>
      <ThemedText type='default'> Recommended </ThemedText>
      <ThemedText type='default'> Liked </ThemedText>
      <ThemedText type='default'> Recent </ThemedText>

      {/* ScrollView voor horizontaal scrollen */}
      <ScrollView
        contentContainerStyle={styles.grid}  // Zorgt voor horizontale uitlijning van de kaarten
        horizontal={true}  // Zet horizontaal scrollen aan
        showsHorizontalScrollIndicator={false}  // Verbergt de horizontale scrollbar
      >
        {items.map((item, index) => (
          <Card key={index} text={item} />
        ))}
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
    padding: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF',  // Zorg ervoor dat de titel wit is
  },
  grid: {
    flexDirection: 'row',  // Zorgt voor horizontale uitlijning van de kaarten
    paddingLeft: 8,  // Voeg ruimte toe aan de linkerzijde
    paddingRight: 8,  // Voeg ruimte toe aan de rechterzijde
  },
});
