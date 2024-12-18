import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#A3BB91',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#25292e',
    },
  }}
> 

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
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
