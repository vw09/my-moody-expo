import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import SharedBackground from '@/components/SharedBackground'; // SharedBackground importeren

export default function Homescreen() {
  const genres = [
    'Pop', 'Rock', 'Metal', 'Electronic', 'Hip Hop', 'Rap', 'R&B', 
    'Soul', 'Funk', 'Jazz', 'Blues', 'Country', 'Reggae', 
    'Klassiek', 'Latin', 'Gospel', 'Folk', 'World Music', 'Opera'
  ];

  return (
    <SharedBackground>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Titel */}
          <ThemedText type="title" style={styles.title}>Your choice</ThemedText>

          {/* ScrollView voor horizontaal scrollen */}
          <ScrollView
            contentContainerStyle={styles.grid}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {genres.map((genre, index) => (
              <Card key={index} text={genre} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SharedBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
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
    paddingLeft: 8,
    paddingRight: 8,
  },
});