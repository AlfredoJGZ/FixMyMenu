import React from 'react';
import { TouchableHighlight , View, Text, StyleSheet } from 'react-native'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function RecipeButton(){
    return(
    <TouchableHighlight underlayColor='#B54646'>
        <View style={styles.button}>
            <FontAwesomeIcon icon={ faList } size={16} color={'white'}/>
            <Text style={ styles.buttonTitle }>Ver Receta</Text>
        </View>
    </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#B12F2F',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 25,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonTitle:{
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'segoe-ui'
    }
})
export default RecipeButton; 