import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
 <Stack.Screen name="index" options={{ title: 'Home' }} />
 <Stack.Screen name="library" options={{ title: 'Library' }} /> 
 <Stack.Screen name="diary" options={{ title: 'Diary' }} /> 
  </Stack>
  );
}
