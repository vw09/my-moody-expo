import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity style={styles.profileIcon}>
        <Text style={styles.profileIconText}>👤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 18,
    color: 'white',
  },
});