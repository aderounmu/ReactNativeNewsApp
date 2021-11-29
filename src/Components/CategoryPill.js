import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const CategoryPill = ({item ,changeCurrentPill , currentPill}) => {
    return(
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: item === currentPill ? '#092953' : '#B3B3B3'} ]}
            onPress= {()=>changeCurrentPill(item)}
        >
            <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        //#B3B3B3
        // backgroundColor: "#092953",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 16,
        width: 100,
        height: 32,
        marginLeft: 10
        
    },
    text:{
        color: "white",
        fontSize: 12
    }
})

export default CategoryPill;
