import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import SharedBackground from '@/components/SharedBackground';


  const genres = [
    'Pop', 'Rock', 'Metal', 'Electronic', 'Hip Hop', 'Rap', 'R&B',
    'Soul', 'Funk', 'Jazz', 'Blues', 'Country', 'Reggae',
    'Klassiek', 'Latin', 'Gospel', 'Folk', 'World Music', 'Opera'
  ];

  export default function Index() {
  return (
    <SharedBackground>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Inhoud */}
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Titel */}
            <ThemedText type="title" style={styles.title}>Your choice</ThemedText>

            {/* Genres */}
            <ScrollView
              contentContainerStyle={styles.genreContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {genres.map((genre, index) => (
                <Card key={index} text={genre} />
              ))}
            </ScrollView>

            {/* Grid met inhoud */}
            <View style={styles.gridContainer}>
              {[...Array(20)].map((_, index) => (
                <View key={index} style={styles.cardPlaceholder} />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SharedBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 2,
    flexDirection: 'column', // Flexibele verticale layout
  },
  contentContainer: {
    flexGrow: 1, // Zorgt ervoor dat de inhoud zich volledig vult
    paddingHorizontal: 4,
    paddingTop: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  genreContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    position: 'fixed',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  cardPlaceholder: {
    width: '48%',
    height: 160,
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    marginBottom: 12,
  },
});