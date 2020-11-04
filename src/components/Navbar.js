import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';


function Navbar(){

  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>

      <TouchableHighlight underlayColor='#B54646' onPress={() => { navigation.toggleDrawer()}}>
        <View>
          <FontAwesomeIcon icon={ faBars } size={25} color={'white'} />
        </View>
      </TouchableHighlight>

      <Text style={styles.title}>FixMyMenu</Text>

      <TouchableHighlight>
        <View>
          <FontAwesomeIcon icon={ faSearch } size={25} color={'white'}/>
        </View>
      </TouchableHighlight>

      <StatusBar style="auto" />

    </View>
    );
}

const styles = StyleSheet.create({
    
    navbar: {
        backgroundColor:'#B12F2F',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: Constants.statusBarHeight,
      },

    title: {
        color: '#FFFFFF',
        fontSize: 15,
    }

});


export default Navbar