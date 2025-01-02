import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
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
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>🏠</Text>
          </View>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>📚</Text>
          </View>
          <Text style={styles.menuText}>Library</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>📖</Text>
          </View>
          <Text style={styles.menuText}>Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text style={styles.menuIconText}>👤</Text>
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
  menuIconText: {
    fontSize: 18,
    color: 'white',
  },
  menuText: {
    fontSize: 20,
    color: 'white',
  },
});