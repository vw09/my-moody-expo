import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Zorg dat expo-linear-gradient is geïnstalleerd
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import useUserGet from '@/data/user-get';
import useUserPut from '@/data/user-put';

// Emoji afbeeldingen
const Good = require('../assets/images/good.png');
const Happy = require('../assets/images/happy.png');
const Sad = require('../assets/images/sad.png');
const Angry = require('../assets/images/angry.png');
const Spectacular = require('../assets/images/spectaculair.png');
const Upset = require('../assets/images/upset.png');

export default function FeelingPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace('/(tabs)'); // Navigeren naar tabs
  };

  const params = useLocalSearchParams();
  const { data, isLoading, isError } = useUserGet(params.userId);
  const { trigger, isMutating } = useUserPut(params.userId);
  const [username, setUsername] = useState('');

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Titel */}
          <Text style={styles.title}>How do you feel today?</Text>

          {/* Emoji-container */}
          <View style={styles.emojiContainer}>
            {/* Eerste Rij */}
            <View style={styles.row}>
              <Image source={Happy} style={styles.emoji} />
            </View>

            {/* Tweede Rij (2 emoji's) */}
            <View style={styles.row}>
              <Image source={Sad} style={styles.emoji} />
              <Image source={Spectacular} style={styles.emoji} />
            </View>

            {/* Derde Rij (2 emoji's) */}
            <View style={styles.row}>
              <Image source={Good} style={styles.emoji} />
              <Image source={Angry} style={styles.emoji} />
            </View>

            {/* Vierde Rij */}
            <View style={styles.row}>
              <Image source={Upset} style={styles.emoji} />
            </View>
          </View>

          {/* Continue Knop */}
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

FeelingPage.options = {
  headerShown: false, // Verberg de standaard header
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  emojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emoji: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  continueButton: {
    backgroundColor: '#3C3C3C',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 20,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});