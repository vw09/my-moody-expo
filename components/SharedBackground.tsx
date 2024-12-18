import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

// Achtergrondafbeelding
const BACKGROUND_IMAGE = require('../assets/images/background2.png');

type SharedBackgroundProps = {
  children: React.ReactNode;
  title?: string; // Optionele titel
};

export default function SharedBackground({ children, title }: SharedBackgroundProps) {
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
      <View style={styles.overlay}>
        {/* Optioneel: Toon een titel bovenaan */}
        {title && <Text style={styles.title}>{title}</Text>}

        {/* Hier komt de unieke content van elke pagina */}
        <View style={styles.contentContainer}>{children}</View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Achtergrond bedekt het hele scherm
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optioneel: Transparante overlay
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});