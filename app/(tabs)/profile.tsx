import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState({ name: '', email: '', mood: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        const email = await AsyncStorage.getItem('userEmail');
        const mood = await AsyncStorage.getItem('userMood');

        setUserData({
          name: name || 'Unknown',
          email: email || 'Unknown',
          mood: mood || 'Neutral',
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userMood');

      Alert.alert('Logged Out', 'You have successfully logged out.');
      router.replace('./index');
    } catch (error) {
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <View style={styles.container}>
        {/* Profielsectie */}
        <View style={styles.profileSection}>
          <View style={styles.profileImage}></View>
          <Text style={styles.greetingText}>Hi</Text>
          <Text style={styles.userName}>{userData.name}</Text>
        </View>

        {/* Gebruikersinformatie */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>{userData.name}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{userData.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Mood</Text>
            <Text style={styles.infoValue}>{userData.mood}</Text>
          </View>
        </View>

        {/* Log Out Knop */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
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
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#444',
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 20,
    color: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#aaa',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 50,
    alignSelf: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#4A6A47',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});