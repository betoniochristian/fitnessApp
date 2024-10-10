import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault, 
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconBar}>
              <TabBarIcon
                name={focused ? 'home' : 'home-outline'}
                color={focused ? Colors[colorScheme ?? 'light'].color : Colors[colorScheme ?? 'light'].tabIconDefault}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconBar}>
              <TabBarIcon
                name={focused ? 'person' : 'person-outline'}
                color={focused ? Colors[colorScheme ?? 'light'].color : Colors[colorScheme ?? 'light'].tabIconDefault} 
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconBar}>
              <TabBarIcon
                name={focused ? 'search' : 'search-outline'}
                color={focused ? Colors[colorScheme ?? 'light'].color : Colors[colorScheme ?? 'light'].tabIconDefault} 
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconBar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.25,
    height: height * 0.1,
  },
});
