import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  const router = useRouter(); // Haal de router op

  return (
    <View style={styles.container}>
      {/* Profielafbeelding */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}></View>
        <Text style={styles.greetingText}>Hi</Text>
        <Text style={styles.userName}>Sarah</Text>
      </View>

      {/* Menuopties */}
      <View style={styles.menu}>
        {/* Home */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/')} // Direct naar de Home-tab
        >
          <View style={styles.menuIcon}>
            <Ionicons name="home-outline" size={24} color="white" />
          </View>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        {/* Library */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/library')} // Direct naar de Library-tab
        >
          <View style={styles.menuIcon}>
            <Ionicons name="library-outline" size={24} color="white" />
          </View>
          <Text style={styles.menuText}>Library</Text>
        </TouchableOpacity>

        {/* Diary */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/diary')} // Direct naar de Diary-tab
        >
          <View style={styles.menuIcon}>
            <Ionicons name="book-outline" size={24} color="white" />
          </View>
          <Text style={styles.menuText}>Diary</Text>
        </TouchableOpacity>

        {/* Log out knop */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/')} // Terug naar de loginpagina
        >
          <View style={styles.menuIcon}>
            <Ionicons name="log-out-outline" size={24} color="white" />
          </View>
          <Text style={styles.menuText}>Log out</Text>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 24,
    color: 'white',
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  menuText: {
    fontSize: 20,
    color: 'white',
  },
});