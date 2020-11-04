import React from 'react';
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

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' drawerStyle={styles.drawer} drawerContentOptions={drawerItemsStyles} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name='Home' options={{ drawerIcon: () => iconCall(faUserCircle) }} component={HomeScreen} />   
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
  fontSize: 50
}; 

const iconCall = (iconName) => 
  <FontAwesomeIcon icon={ iconName } size={20} color={'#FFFFFF'} />

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Salir" labelStyle={{color: '#FFFFFF'}} 
        icon = { () => iconCall(faSignOutAlt) } 
        onPress={() => alert('SALISTE DE LA APP')} 
      />
    </DrawerContentScrollView>
  );
}





