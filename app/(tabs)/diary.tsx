import { Text, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function DiaryScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type='title'> Diary </ThemedText>
      <ThemedText type='default'> Moodchart this week </ThemedText>
      <ThemedText type='default'> Mood counter </ThemedText>
      <ThemedText type='default'> Quote </ThemedText>
      <ThemedText type='default'> Moodchart this month </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
