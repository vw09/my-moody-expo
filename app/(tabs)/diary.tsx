import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mood data simuleren
const moodDataWeekly = [
  { mood: 'Happy', count: 12 },
  { mood: 'Sad', count: 8 },
  { mood: 'Angry', count: 4 },
];

const moodDataMonthly = [
  { mood: 'Happy', count: 45 },
  { mood: 'Sad', count: 20 },
  { mood: 'Angry', count: 10 },
];

// Quotes lijst
const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Happiness is a journey, not a destination.",
  "Be the change you wish to see in the world.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

const screenWidth = Dimensions.get('window').width;

export default function DiaryScreen() {
  const quoteOfTheDay = quotes[new Date().getDay() % quotes.length];

  return (
    <LinearGradient colors={['#1A1F1A', '#000']} style={styles.background}>
      {/* Vaste Titel in een SafeAreaView */}
      <SafeAreaView style={styles.fixedHeader}>
        <Text style={styles.title}>Mood Diary</Text>
      </SafeAreaView>

      {/* Scrollbare inhoud */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Moodchart van deze week */}
        <View style={[styles.card, styles.fullWidthCard]}>
          <Text style={styles.cardTitle}>Moodchart This Week</Text>
          <BarChart
            data={{
              labels: moodDataWeekly.map((data) => data.mood),
              datasets: [{ data: moodDataWeekly.map((data) => data.count) }],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#292929',
              backgroundGradientFrom: '#292929',
              backgroundGradientTo: '#292929',
              color: (opacity = 1) => `rgba(32, 125, 55, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
            }}
            style={{
              marginVertical: 10,
              borderRadius: 10,
            }}
          />
        </View>

        {/* Moodcounter en Quote van de Dag */}
        <View style={styles.row}>
          <View style={[styles.card, styles.halfWidthCard]}>
            <Text style={styles.cardTitle}>Mood Counter</Text>
            <View>
              {moodDataWeekly.map((data) => (
                <Text key={data.mood} style={styles.moodCount}>
                  {data.mood}: {data.count}
                </Text>
              ))}
            </View>
          </View>
          <View style={[styles.card, styles.halfWidthCard, styles.quoteCard]}>
            <Text style={styles.quoteText}>{quoteOfTheDay}</Text>
          </View>
        </View>

        {/* Moodchart van deze maand */}
        <View style={[styles.card, styles.fullWidthCard]}>
          <Text style={styles.cardTitle}>Moodchart This Month</Text>
          <PieChart
            data={moodDataMonthly.map((data) => ({
              name: data.mood,
              population: data.count,
              color:
                data.mood === 'Happy'
                  ? '#FFCC80'
                  : data.mood === 'Sad'
                  ? '#90CAF9'
                  : '#EF9A9A',
              legendFontColor: '#FFF',
              legendFontSize: 14,
            }))}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#292929',
              backgroundGradientFrom: '#292929',
              backgroundGradientTo: '#292929',
              color: (opacity = 1) => `rgba(32, 125, 55, ${opacity})`,
              style: {
                borderRadius: 10,
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            style={{
              marginVertical: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 28, // Zorg dat je kunt scrollen tot net boven de navbar
  },
  scrollView: {
    marginTop: 10, // Begin onder de titel
    marginBottom: 48, // Eindig boven de navbar
  
  },
  fixedHeader: {
    paddingTop: 20, // Zorg dat de titel niet achter de notch zit
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 48,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#292929',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  fullWidthCard: {
    width: '100%',
    height: 300,
  },
  halfWidthCard: {
    width: '48%',
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#207D37',
    marginBottom: 10,
  },
  moodCount: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  quoteCard: {
    backgroundColor: '#204D37',
    borderWidth: 1,
    borderColor: '#5A7345',
    padding: 10,
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});