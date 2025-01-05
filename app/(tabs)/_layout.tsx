import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TabLayout() {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      const user = await AsyncStorage.getItem('userId');
      if (user) {
        const parsedUser = JSON.parse(user);
        const userId = parsedUser.id;
        setUserId(userId);
      }
    }
    getUserId()  
  }, []);

  if (!userId) {
    return null;
  }



  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#204D37',
    tabBarStyle: {
      backgroundColor: '#25292e',
      position: 'absolute',
      bottom: 28,           // Afstand vanaf de onderkant
      marginHorizontal: 20, // Ruimte aan beide kanten
      borderRadius: 30,     // Afgeronde hoeken
      height: 50,           // Hoogte van de navigatiebalk
      paddingTop: 5,       // Ruimte boven de iconen
      paddingBottom: 5,    // Ruimte onder de iconen
      justifyContent: 'center', // Verticaal centreren
      alignItems: 'center',     // Horizontaal centreren
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      elevation: 5,         // Schaduw op Android
    },
    tabBarShowLabel: false, // Verberg de tab labels
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
  name="musicplayer"
  options={{
    headerShown: false,
    title: 'Music Player',
    tabBarIcon: ({ color, focused }) => (
      <Ionicons name={focused ? 'musical-notes' : 'musical-notes-outline'} color={color} size={24} />
    ),
  }}
/>

<Tabs.Screen
        name="diary"
        initialParams={{ userId }}
        options={{
          headerShown: false,
          title: 'Diary',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-sharp'} color={color} size={24}/>
          ),
        }}
      />

<Tabs.Screen
        name="profile"
        initialParams={{ userId }}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24}/>
          ),
        }}
      />

    </Tabs>

    
  );
}
