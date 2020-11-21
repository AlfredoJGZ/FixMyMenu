import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Navbar from './Navbar'; 
import RecipeButton from './RecipeButton'; 
import Calendar from './Calendar'
function HomeScreen({ route }){
    return (
        <View>
          <Navbar title={route.name}/>
          <ImageBackground
            style={styles.headerBackground}
            source={require('../../assets/red-velvet.jpg')}
          >
            <View style={styles.screen}>
              <View style={styles.headerContent}>
                <Image
                  style={styles.headerImg}
                  source={require('../../assets/red-velvet.jpg')}
                />
                <View style={ styles.headerButtonContainer }>
                  <Text style={ styles.headerTitle }>Red Velvet</Text>
                  <RecipeButton />
                </View>
              </View>
            </View> 
          </ImageBackground>
          <Calendar />
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
  headerBackground:{
    width: 100 + '%',
    height: 250,
    position: 'relative',
  },
  headerContent:{
    width: 90 + '%',
    height: 100 + '%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',  
  },
  headerImg:{
    width: 50 + '%',
    height: 100 + '%',
  },
  headerButtonContainer:{
    width: 50 + '%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle:{
    fontFamily: 'segoe-ui',
    fontSize: 34,
    color: '#FFFFFF',
    textShadowColor: '#B12F2F',
    textShadowRadius: 3, textShadowOffset: { 
      width: 1,
      height: 1
    },
    marginBottom: 25
  },
  screen:{
    width: 100 + '%',
    height: 100 + '%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 5 + '%'
  }
});

export default HomeScreen; 