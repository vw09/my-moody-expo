import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useUserGet from '@/data/user-get';
import useUserPut from '@/data/user-put';
import useRandomSong from '@/data/song-get';
import useSongPut from '@/data/song-put';
import { useLocalSearchParams } from 'expo-router';

export default function ProfileScreen() {
  const params = useLocalSearchParams();
  const { data, isLoading } = useUserGet(params.userId || 'defaultUserId');
  const { song, isLoading: isSongLoading } = useRandomSong();
  const { trigger: updateUser, isMutating } = useUserPut(params.userId || 'defaultUserId');

  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [isEditingSong, setIsEditingSong] = useState(false);
  const [editedSongTitle, setEditedSongTitle] = useState('');
  const [editedSongArtist, setEditedSongArtist] = useState('');

  useEffect(() => {
    if (data) {
      setEditedName(data.username || 'Unknown User');
    }
    if (song) {
      setEditedSongTitle(song.title);
      setEditedSongArtist(song.artist);
    }
  }, [data, song]);

  const handleNameUpdate = async () => {
    if (!editedName.trim()) {
      Alert.alert('Validation Error', 'Name cannot be empty.');
      return;
    }

    try {
      await updateUser({ id: params.userId || 'defaultUserId', username: editedName });
      Alert.alert('Success', 'Name updated successfully!');
      setIsEditingName(false);
    } catch (error) {
      console.error('Failed to update name:', error);
      Alert.alert('Error', 'Failed to update the name.');
    }
  };

  const handleSongUpdate = async () => {
    if (!editedSongTitle.trim() || !editedSongArtist.trim()) {
      Alert.alert('Validation Error', 'Song title and artist cannot be empty.');
      return;
    }

    try {
      await updateSong({ id: song._id, title: editedSongTitle, artist: editedSongArtist });
      Alert.alert('Success', 'Song updated successfully!');
      setIsEditingSong(false);
    } catch (error) {
      console.error('Failed to update song:', error);
      Alert.alert('Error', 'Failed to update the song.');
    }
  };

  if (isLoading || isMutating || !data) {
    return (
      <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Header Sectie */}
          <View style={styles.header}>
            <Image
              source={{
                uri: data.image || 'https://via.placeholder.com/120',
              }}
              style={styles.profileImage}
            />
            {isEditingName ? (
              <>
                <TextInput
                  style={styles.textInput}
                  value={editedName}
                  onChangeText={setEditedName}
                  placeholder="Enter your name"
                  placeholderTextColor="#AAA"
                />
                <TouchableOpacity style={styles.actionButtonFilled} onPress={handleNameUpdate}>
                  <Text style={styles.actionButtonFilledText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButtonTransparent}
                  onPress={() => setIsEditingName(false)}
                >
                  <Text style={styles.actionButtonTransparentText}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.circleButton}
                    onPress={() => setIsEditingName(true)}
                  >
                    <Text style={styles.circleButtonText}>✎</Text>
                  </TouchableOpacity>
                  <Text style={styles.userName}>{data.username || 'Unknown User'}</Text>
                </View>
              </>
            )}
            <Text style={styles.userEmail}>{data.email || 'No email provided'}</Text>
          </View>

          {/* Mood Tracker */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Mood Tracker</Text>
            <Text style={styles.cardContent}>
              Current Mood: <Text style={styles.highlight}>{data.mood || 'Not set'}</Text>
            </Text>
          </View>

          {/* Current Song */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Now Playing</Text>
            {isSongLoading ? (
              <Text style={styles.cardContent}>Loading song...</Text>
            ) : song ? (
              isEditingSong ? (
                <>
                  <TextInput
                    style={styles.textInput}
                    value={editedSongTitle}
                    onChangeText={setEditedSongTitle}
                    placeholder="Enter song title"
                    placeholderTextColor="#AAA"
                  />
                  <TextInput
                    style={styles.textInput}
                    value={editedSongArtist}
                    onChangeText={setEditedSongArtist}
                    placeholder="Enter artist name"
                    placeholderTextColor="#AAA"
                  />
                  <TouchableOpacity style={styles.actionButtonFilled} onPress={handleSongUpdate}>
                    <Text style={styles.actionButtonFilledText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButtonTransparent}
                    onPress={() => setIsEditingSong(false)}
                  >
                    <Text style={styles.actionButtonTransparentText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => setIsEditingSong(true)}
                    >
                      <Text style={styles.circleButtonText}>✎</Text>
                    </TouchableOpacity>
                    <Text style={styles.cardContent}>
                      {song.title} by <Text style={styles.highlight}>{song.artist}</Text>
                    </Text>
                  </View>
                </>
              )
            ) : (
              <Text style={styles.cardContent}>No song currently playing</Text>
            )}
          </View>

          {/* Actieknoppen */}
          <TouchableOpacity style={styles.actionButtonFilled}>
            <Text style={styles.actionButtonFilledText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#6BAF92',
  },
  userName: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#BBB',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#3C3C3C',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: '#FFF',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#6BAF92',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#6BAF92',
    borderRadius: 10,
    padding: 10,
    color: '#FFF',
    fontSize: 16,
    width: '90%',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#333',
  },
  actionButtonFilled: {
    backgroundColor: '#204D37',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  actionButtonFilledText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtonTransparent: {
    borderColor: '#6BAF92',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 15,
  },
  actionButtonTransparentText: {
    color: '#6BAF92',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#204D37', // Randkleur
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'transparent', // Transparante achtergrond
  },
  circleButtonText: {
    color: '#FFF', // Witte kleur voor het ✎-icoon
    fontSize: 14,
    fontWeight: 'bold',
  },
});

function updateSong(arg0: { id: any; title: string; artist: string; }) {
  throw new Error('Function not implemented.');
}
