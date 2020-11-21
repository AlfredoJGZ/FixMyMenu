import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import RecipeButton from './RecipeButton'; 

function Calendar(){
    return(
        <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
                <FontAwesomeIcon icon={ faCalendarAlt } size={32} color={'white'} style={{marginRight:10}}/>
                <Text style={styles.headerText}>16 NOV</Text>
            </View>
            <View style={styles.calendarSquare}>
                <Text style={{color:'#9B9B9B'}}>Desayuno</Text>
                <View>
                    <Text style={styles.recipeTitle}>Nombre de receta</Text>
                    <RecipeButton />
                </View>
            </View>
            <View style={styles.calendarSquare}>
                <Text style={{color:'#9B9B9B'}}>Almuerzo</Text>
                <View>
                    <Text style={styles.recipeTitle}>Nombre de receta</Text>
                    <RecipeButton />
                </View>
            </View>
            <View style={[styles.calendarSquare , {borderBottomWidth: 0}]}>
                <Text style={{color:'#9B9B9B'}}>Cena</Text>
                <View>
                    <Text style={styles.recipeTitle}>Nombre de receta</Text>
                    <RecipeButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    calendarContainer:{
        width: 90 + '%',
        marginHorizontal: 5 + '%',
        marginTop: 25,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    calendarHeader:{
        backgroundColor: '#B12F2F',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'    
    },
    headerText:{
        fontFamily: 'segoe-ui',
        fontSize: 32,
        color:'#FFFFFF'
    },
    calendarSquare:{
        backgroundColor:'#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#9B9B9B'
    },
    recipeTitle:{
        fontFamily: 'segoe-ui',
        color: '#B12F2F',
        fontSize: 28,
        fontWeight: 'bold', 
        marginVertical: 10
    }
})

export default Calendar;