import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useRandomSong from '@/data/song-get'; // Importeer de hook

export default function MusicPlayerScreen() {
  const { song, isLoading, isError } = useRandomSong();

  if (isLoading) {
    return (
      <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#6BAF92" />
        </View>
      </LinearGradient>
    );
  }

  if (isError || !song) {
    return (
      <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
        <View style={styles.container}>
          <Text style={{ color: 'white' }}>Failed to load song. Please try again.</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.albumArtContainer}>
          <Image
            source={{
              uri: song?.albumArt || 'https://via.placeholder.com/250',
            }}
            style={styles.albumArt}
          />
        </View>

        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{song?.title || 'Unknown Song'}</Text>
          <Text style={styles.singerName}>{song?.artist || 'Unknown Artist'}</Text>
          <Text style={styles.albumName}>{song?.album || 'Unknown Album'}</Text>
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
    justifyContent: 'center',
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
  albumName: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
});