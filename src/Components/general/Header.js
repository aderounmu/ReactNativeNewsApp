import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'


export default function Header({title, subtitle}) {
    return (
       <View style= {HeaderStyle.header}>
           <Text style={HeaderStyle.title}>{title}</Text>
           <Text style={HeaderStyle.subtitle}>{subtitle}</Text>  
           
       </View>
    )
}

const HeaderStyle = StyleSheet.create({
    header:{
        height: Platform.OS === 'ios'? 100: 70,
        paddingTop: Platform.OS === 'ios'? 30: 10 , 
        // backgroundColor:'darkslateblue'
        marginRight: 25,
        // marginBottom: 32,
        // display: 'flex',
        // flexDirection: 'column'
    },

    title:{
        color: '#333647',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    subtitle:{
        color: "#7C82A0",
        width: 300,
        textAlign: 'left',
        fontSize: 16,
        paddingTop: 8,
        // flexWrap: 'wrap',
        // flexShrink: 1,
        // backgroundColor: 'red',
        
        
        
    },

    
})