import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { API_URL } from '@/constants/Api';

export default function HomeScreen() {
  const [playlists, setPlaylists] = useState([]); // Opslag voor alle playlists
  const [isLoading, setIsLoading] = useState(true); // Laadstatus
  const router = useRouter(); // Gebruik de router voor navigatie

  // Haal alle playlists op
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(`${API_URL}/playlists`);
        const data = await response.json();
        console.log('Fetched playlists:', data); // Controleer de opgehaalde data
        setPlaylists(data); // Sla alle playlists op
      } catch (error) {
        console.error('Error fetching playlists:', error);
      } finally {
        setIsLoading(false); // Zet de laadstatus uit
      }
    };

    fetchPlaylists();
  }, []);

  // Laadstatus
  if (isLoading) {
    return (
      <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.loadingText}>Loading playlists...</Text>
        </View>
      </LinearGradient>
    );
  }

  // Render een playlist-item
  interface Song {
    _id: string;
    title: string;
    artist: string;
  }

  interface Playlist {
    _id: string;
    name: string;
    songIds: Song[];
  }

  const handlePlaylistPress = (playlist: Playlist) => {
    // Navigeer naar de pagina 'musicplayer' en stuur de playlist-gegevens mee
    router.push({
      pathname: '/musicplayer',
      params: {
        playlistId: playlist._id,
        playlistName: playlist.name,
      },
    });
  };

  const renderPlaylist = ({ item }: { item: Playlist }) => (
    <TouchableOpacity
      style={styles.playlistCard}
      onPress={() => handlePlaylistPress(item)} // Navigatie bij klikken
    >
      <Text style={styles.playlistTitle}>{item.name}</Text>
      <Text style={styles.songCount}>{item.songIds.length} songs</Text>
      {item.songIds.slice(0, 2).map((song: Song) => ( // Toon maximaal 2 songs
        <Text key={song._id} style={styles.song}>
          {song.title} - {song.artist}
        </Text>
      ))}
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>All Playlists</Text>

          <FlatList
            data={playlists}
            keyExtractor={(item) => item._id.toString()} // Gebruik de unieke playlist-ID
            renderItem={renderPlaylist}
            contentContainerStyle={styles.playlistList}
            numColumns={2} // Zorg voor 2 kaarten per rij
          />
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 48,
    color: '#FFF',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 18,
    color: '#FFF',
  },
  playlistList: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  playlistCard: {
    backgroundColor: '#292929',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  playlistTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  songCount: {
    fontSize: 14,
    color: '#6BAF92',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  song: {
    fontSize: 12,
    color: '#BBB',
    textAlign: 'center',
    marginBottom: 5,
  },
});