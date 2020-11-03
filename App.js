import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Constants from "expo-constants";
import HomeScreen from './src/components/HomeScreen';
import CalendarScreen from './src/components/CalendarScreen';


const Drawer = createDrawerNavigator(); 

export default function App() {

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' drawerStyle={styles.drawer}>
        <Drawer.Screen name='Home' component={HomeScreen} />   
        <Drawer.Screen name='Calendario' component={CalendarScreen} />     
      </Drawer.Navigator>     
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  drawer:{
    backgroundColor: '#B12F2F',
    opacity: 0.9,    
  }
});

