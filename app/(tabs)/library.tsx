import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Zorg dat expo-linear-gradient is geïnstalleerd

export default function LibraryScreen() {
  const categories = ['Playlists', 'Podcasts', 'Artists', 'Albums'];
  const recentItems = ['Recent 1', 'Recent 2', 'Recent 3', 'Recent 4'];
  const likedItems = ['Liked 1', 'Liked 2', 'Liked 3', 'Liked 4'];
  const recommendedItems = ['Recommended 1', 'Recommended 2', 'Recommended 3', 'Recommended 4'];

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Titel */}
        <Text style={styles.title}>Library</Text>

        {/* Categorieën */}
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Secties */}
        <Text style={styles.sectionTitle}>Recent</Text>
        <View style={styles.grid}>
          {recentItems.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Liked</Text>
        <View style={styles.grid}>
          {likedItems.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.grid}>
          {recommendedItems.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100, // Zorg ervoor dat er ruimte is onderaan om te scrollen
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#444',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '45%',
    height: 100,
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});