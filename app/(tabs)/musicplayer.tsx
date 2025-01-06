import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Animated, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import useRandomSong from '@/data/song-get'; // Importeer de hook

export default function MusicPlayerScreen() {
  const { song, isLoading, isError } = useRandomSong();

  // Animatie voor knoppen
  const createAnimatedButton = () => {
    const scale = new Animated.Value(1);
    const onPressIn = () => Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }).start();
    const onPressOut = () => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();

    return { scale, onPressIn, onPressOut };
  };

  const shuffleButton = createAnimatedButton();
  const skipBackButton = createAnimatedButton();
  const playButton = createAnimatedButton();
  const skipForwardButton = createAnimatedButton();
  const repeatButton = createAnimatedButton();

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
        {/* Album Art */}
        <View style={styles.albumArtContainer}>
          <Image
            source={song?.albumArt ? { uri: song.albumArt } : require('@/assets/images/music.jpeg')}
            style={styles.albumArt}
          />
        </View>

        {/* Song Info */}
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{song?.title || 'Unknown Song'}</Text>
          <Text style={styles.singerName}>{song?.artist || 'Unknown Artist'}</Text>
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          {/* Shuffle Button */}
          <TouchableWithoutFeedback
            onPress={() => console.log('Shuffle Pressed')}
            onPressIn={shuffleButton.onPressIn}
            onPressOut={shuffleButton.onPressOut}
          >
            <Animated.View style={{ transform: [{ scale: shuffleButton.scale }] }}>
              <Ionicons name="shuffle" size={20} color="#FFF" />
            </Animated.View>
          </TouchableWithoutFeedback>

          {/* Skip Back Button */}
          <TouchableWithoutFeedback
            onPress={() => console.log('Skip Back Pressed')}
            onPressIn={skipBackButton.onPressIn}
            onPressOut={skipBackButton.onPressOut}
          >
            <Animated.View style={[styles.controlButton, { transform: [{ scale: skipBackButton.scale }] }]}>
              <Ionicons name="play-skip-back" size={24} color="#FFF" />
            </Animated.View>
          </TouchableWithoutFeedback>

          {/* Play Button */}
          <TouchableWithoutFeedback
            onPress={() => console.log('Play Pressed')}
            onPressIn={playButton.onPressIn}
            onPressOut={playButton.onPressOut}
          >
            <Animated.View style={[styles.playButton, { transform: [{ scale: playButton.scale }] }]}>
              <Ionicons name="play" size={30} color="#000" />
            </Animated.View>
          </TouchableWithoutFeedback>

          {/* Skip Forward Button */}
          <TouchableWithoutFeedback
            onPress={() => console.log('Skip Forward Pressed')}
            onPressIn={skipForwardButton.onPressIn}
            onPressOut={skipForwardButton.onPressOut}
          >
            <Animated.View style={[styles.controlButton, { transform: [{ scale: skipForwardButton.scale }] }]}>
              <Ionicons name="play-skip-forward" size={24} color="#FFF" />
            </Animated.View>
          </TouchableWithoutFeedback>

          {/* Repeat Button */}
          <TouchableWithoutFeedback
            onPress={() => console.log('Repeat Pressed')}
            onPressIn={repeatButton.onPressIn}
            onPressOut={repeatButton.onPressOut}
          >
            <Animated.View style={{ transform: [{ scale: repeatButton.scale }] }}>
              <Ionicons name="repeat" size={20} color="#FFF" />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <Text style={styles.time}>0:15</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
          <Text style={styles.time}>3:45</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  albumArtContainer: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#444',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  albumArt: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  songInfo: {
    alignItems: 'center',
    marginBottom: 30,
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
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 30,
  },
  controlButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
  },
  playButton: {
    backgroundColor: '#6BAF92',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#444',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  progress: {
    width: '40%',
    height: '100%',
    backgroundColor: '#6BAF92',
  },
  time: {
    fontSize: 14,
    color: '#FFF',
  },
});