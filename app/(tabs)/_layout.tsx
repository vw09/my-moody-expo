import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#A3BB91',
    tabBarStyle: {
      backgroundColor: '#25292e',
      position: 'absolute', // Laat de tabBar zweven
      bottom: 28,           // Afstand vanaf de onderkant
      marginHorizontal: 20, // Gelijke ruimte links en rechts
      borderRadius: 30,     // Afgeronde hoeken
      height: 50,           // Hoogte van de navigatiebalk
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,         // Schaduw op Android
    },
    tabBarShowLabel: false, // Verberg de tab labels als alleen iconen gewenst zijn
  }}
>

<Tabs.Screen
  name="index"
  options={{
    headerShown: false, // Verberg de standaard header
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
    ),
  }}
/>
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'library-sharp' : 'library-outline'} color={color} size={24}/>
          ),
        }}
      />

<Tabs.Screen
        name="diary"
        options={{
          title: 'Diary',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-sharp'} color={color} size={24}/>
          ),
        }}
      />

    </Tabs>

    
  );
}
