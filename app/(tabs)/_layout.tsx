import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#204D37',
        tabBarStyle: {
          backgroundColor: '#25292e', // Background color of the navigation bar
          position: 'absolute',
          bottom: 32,
          marginHorizontal: 20,
          borderRadius: 30,
          height: 48, // Increase height to center icons vertically
          elevation: 0, // Remove shadow on Android
          borderWidth: 0, // Remove any border
          borderTopWidth: 0, // Remove top border specifically
        },
        tabBarItemStyle: {
          alignItems: 'center', // Center icons horizontally
          justifyContent: 'center', // Center icons vertically
        },
        tabBarShowLabel: false, // No text under the icons
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} /> // Icon size
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="musicplayer"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}