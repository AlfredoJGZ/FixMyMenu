import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar'

function CalendarScreen({ route }){
    return (
        <View>
          <Navbar title={route.name}/>
          <Text>CALENDARIO!</Text>
          <StatusBar style="auto" />
        </View>
      );
}

export default CalendarScreen;  