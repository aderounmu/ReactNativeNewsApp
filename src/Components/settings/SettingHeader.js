import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import IconButton from 'react-native-vector-icons/AntDesign';

export default function SettingHeader({title, navigation}) {
    return (
       <View style= {HeaderStyle.header}>
           <IconButton name={'arrowleft'} size={24} color="#7C82A0" style={HeaderStyle.icon} onPress={()=> navigation.goBack()} />
           <Text style={HeaderStyle.title}>{title}</Text>
       </View>
    )
}

const HeaderStyle = StyleSheet.create({
    header:{
        height: Platform.OS === 'ios'? 100: 70,
        paddingTop: Platform.OS === 'ios'? 30: 10 , 
        marginRight: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 30
    },
    title:{
        color: '#333647',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: '600'
    },
    
})