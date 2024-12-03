import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface CardProps {
  text: string; // De tekst die we aan de Card willen doorgeven
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <View style={styles.card}>
      <ThemedText type="default" style={styles.cardText}>
        {text}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3c3f41',  // Kleur van de rechthoek
    padding: 16,  // Padding binnen de kaart
    borderRadius: 12,  // Afronden van hoeken
    margin: 8,  // Ruimte tussen kaarten
    alignItems: 'center',  // Centraal uitlijnen van de tekst
    justifyContent: 'center',  // Zorgt ervoor dat de tekst gecentreerd is
    minWidth: 100,  // Minimale breedte van de kaart (past goed voor horizontaal scrollen)
    maxWidth: 150,  // Maximale breedte van de kaart
    height: 50,  // Verhoog de hoogte naar 50 (aanpassen op basis van je ontwerp)
  },
  cardText: {
    color: '#FFF',  // Kleur van de tekst
    textAlign: 'center',  // Zorg ervoor dat de tekst in het midden van de kaart staat
    fontSize: 14,  // Pas de tekstgrootte aan
    lineHeight: 18,  // Zorg voor voldoende ruimte tussen de regels
  },
});

export default Card;
