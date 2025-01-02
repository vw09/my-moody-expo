import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleText}>P</Text> {/* Profiel */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleText}>S</Text> {/* Zoek */}
        </TouchableOpacity>
      </View>

      {/* Albumafbeelding */}
      <View style={styles.albumArtContainer}>
        <View style={styles.albumArt}></View>
      </View>

      {/* Titel en artiest */}
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>Titel</Text>
        <Text style={styles.singerName}>Singer name</Text>
      </View>

      {/* Geluidsvisualisatie */}
      <View style={styles.visualizer}>
        {[...Array(20)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.visualizerBar,
              { height: Math.random() * 50 + 20 }, // Random hoogte voor een effect
            ]}
          />
        ))}
      </View>

      {/* Controleknoppen */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>⏮️</Text> {/* Vorige */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playText}>▶️</Text> {/* Afspelen */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>⏭️</Text> {/* Volgende */}
        </TouchableOpacity>
      </View>

      {/* Navigatiebalk */}
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navText}>🏠</Text> {/* Home */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>📊</Text> {/* Statistieken */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>🎵</Text> {/* Muziek */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 18,
  },
  albumArtContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  albumArt: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
  },
  songInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  songTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  singerName: {
    fontSize: 16,
    color: 'gray',
  },
  visualizer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  visualizerBar: {
    width: 10,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    color: 'white',
    fontSize: 20,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playText: {
    color: 'white',
    fontSize: 30,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  navText: {
    fontSize: 24,
    color: 'white',
  },
});