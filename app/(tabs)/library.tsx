import { Text, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type='title'> Library </ThemedText>
      <ThemedText type='default'> Recent </ThemedText>
      <ThemedText type='default'> Liked </ThemedText>
      <ThemedText type='default'> Recommended </ThemedText>
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
