import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

export default function LibraryScreen() {
  const categories = ['Playlists', 'Podcasts', 'Artisten', 'Albums'];
  const recentItems = ['Recent 1', 'Recent 2', 'Recent 3', 'Recent 4'];
  const likedItems = ['Liked 1', 'Liked 2', 'Liked 3', 'Liked 4'];
  const recommendedItems = ['Recommended 1', 'Recommended 2', 'Recommended 3', 'Recommended 4'];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.icon}>
            <Text style={styles.iconText}>👤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Text style={styles.iconText}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Library</Text>

        {/* Categories */}
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

        {/* Sections */}
        <Text style={styles.sectionTitle}>Recent</Text>
        <View style={styles.grid}>
          {recentItems.map((item, index) => (
            <View key={index} style={styles.card} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Liked</Text>
        <View style={styles.grid}>
          {likedItems.map((item, index) => (
            <View key={index} style={styles.card} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.grid}>
          {recommendedItems.map((item, index) => (
            <View key={index} style={styles.card} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    overflow: 'hidden', // Zorg ervoor dat inhoud buiten de container wordt verborgen
  },
  scrollView: {
    flex: 1,
    marginBottom: -50, // Zorg ervoor dat inhoud onder de navigatie verdwijnt
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100, // Zorg voor extra ruimte onderaan
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
    color: 'white',
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
  },
});