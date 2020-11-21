import React, { useEffect } from 'react';
import { Font } from 'expo';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faCalendarAlt, faList, faUtensils, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import HomeScreen from './src/components/HomeScreen';
import CalendarScreen from './src/components/CalendarScreen';
import RecipesScreen from './src/components/RecipesScreen';
import TutorialsScreen from './src/components/TutorialsScreen';

const Drawer = createDrawerNavigator(); 

export default function App() {

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'segoe-ui': require('./assets/fonts/segoeui.ttf')
      })
    }
  });

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' drawerStyle={styles.drawer} drawerContentOptions={drawerItemsStyles} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name='Inicio' options={{ drawerIcon: () => iconCall(faUserCircle) , title:"Hola Alfredo!"}} component={HomeScreen} />   
        <Drawer.Screen name='Calendario' options={{drawerIcon: () => iconCall(faCalendarAlt) }} component={CalendarScreen} />
        <Drawer.Screen name='Recetas' options={{drawerIcon: () => iconCall(faList) }} component={RecipesScreen} />   
        <Drawer.Screen name='Tutoriales' options={{drawerIcon: () => iconCall(faUtensils) }} component={TutorialsScreen} />     
      </Drawer.Navigator>     
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  drawer:{
    backgroundColor: '#B12F2F',   
  }
});

const drawerItemsStyles = {
  activeTintColor: '#FFFFFF',
  inactiveTintColor: '#FFFFFF',
  activeBackgroundColor: '#B54646',
  labelStyle: {
    fontSize: 22,
    fontFamily: 'segoe-ui'
  }
}; 

/* FUNCION PARA LLAMAR ICONOS DE FONTAWESOME */

const iconCall = (iconName) => 
  <FontAwesomeIcon icon={ iconName } size={20} color={'#FFFFFF'} />

/* FUNCION QUE RETORNA EL BOTON PARA CERRAR SESION */

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Salir" labelStyle={{color: '#FFFFFF' , fontSize: 22, fontFamily: 'segoe-ui'}} 
        icon = { () => iconCall(faSignOutAlt) } 
        onPress={() => alert('SALISTE DE LA APP')} 
      />
    </DrawerContentScrollView>
  );
}





