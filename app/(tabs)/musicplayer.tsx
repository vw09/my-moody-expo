import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MusicPlayerScreen() {
  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <View style={styles.container}>
        {/* Albumafbeelding */}
        <View style={styles.albumArtContainer}>
          <Image
            source={{
              uri: 'https://via.placeholder.com', // Vervang dit door de echte albumafbeelding
            }}
            style={styles.albumArt}
          />
        </View>

        {/* Titel en artiest */}
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>Song Title</Text>
          <Text style={styles.singerName}>Artist Name</Text>
        </View>

        {/* Visualizer */}
        <View style={styles.visualizer}>
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.visualizerBar,
                { height: Math.random() * 50 + 20 }, // Random hoogte
              ]}
            />
          ))}
        </View>

        {/* Bedieningselementen */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="play-skip-back" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={40} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="play-skip-forward" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  albumArtContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#444',
  },
  songInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  songTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  singerName: {
    fontSize: 16,
    color: '#BBB',
    textAlign: 'center',
    marginTop: 5,
  },
  visualizer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  visualizerBar: {
    width: 10,
    backgroundColor: '#6BAF92',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6BAF92',
    justifyContent: 'center',
    alignItems: 'center',
  },
});