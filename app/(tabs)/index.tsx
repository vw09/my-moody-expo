import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import SharedBackground from '@/components/SharedBackground';

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

          {/* Genres */}
          <ScrollView
            contentContainerStyle={styles.genreContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {genres.map((genre, index) => (
              <Card key={index} text={genre} />
            ))}
          </ScrollView>

          {/* Scrollbaar Grid */}
          <ScrollView
  contentContainerStyle={[styles.cardGrid, { paddingBottom: 100 }]} // Voeg ruimte toe onderaan
>
  {[...Array(20)].map((_, index) => (
    <View key={index} style={styles.cardPlaceholder} />
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
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  genreContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20, // Extra ruimte onderaan
  },
  cardPlaceholder: {
    width: '47%', // Twee kaarten naast elkaar
    height: 120,  // Hoogte van de rechthoeken
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    marginBottom: 16,
  },
});