import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useUserGet from '@/data/user-get';
import { useLocalSearchParams } from 'expo-router';

export default function ProfileScreen() {
  const params = useLocalSearchParams();
  const { data, isLoading } = useUserGet(params.userId);

  if (isLoading || !data) {
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
                uri: data.image || 'https://via.placeholder.com',
              }}
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{data.username || 'Unknown User'}</Text>
            <Text style={styles.userEmail}>{data.email || 'No email provided'}</Text>
          </View>

          {/* Informatiekaarten */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Mood Tracker</Text>
            <Text style={styles.cardContent}>
              Current Mood: <Text style={styles.highlight}>{data.mood || 'Not set'}</Text>
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Joined On</Text>
            <Text style={styles.cardContent}>
              {new Date(data.createdAt).toLocaleDateString() || 'Date not available'}
            </Text>
          </View>

          {/* Actieknoppen */}
          <TouchableOpacity style={styles.actionButtonTransparent}>
            <Text style={styles.actionButtonTransparentText}>Edit Profile</Text>
          </TouchableOpacity>
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
  actionButtonFilled: {
    backgroundColor: '#204D37',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
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
});