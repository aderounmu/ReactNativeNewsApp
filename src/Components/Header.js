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
        height: Platform.OS === 'ios'? 100: 60,
        paddingTop: Platform.OS === 'ios'? 30: 10 , 
        // backgroundColor:'darkslateblue'
    },

    title:{
        color: '#333647',
        fontSize: 24,
        textAlign: 'left',
    },
    subtitle:{
        color: "#C4C4C4",
        textAlign: 'left',
        fontSize: 16,
        paddingTop: 8,
    }
})