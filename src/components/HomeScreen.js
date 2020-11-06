import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar'; 

function HomeScreen({ route }){
    return (
        <View>
          <Navbar title={route.name}/>
            <Text>{route.name}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen; 