import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingListItem = ({text, link ,icon}) => {
    return(
        <>
            <TouchableOpacity style={styles.Container} onPress={()=>link()}>     
                <Text style={styles.text}>{text}</Text>
                <Icon name={icon} size={24} color="#7C82A0" style={styles.Icon} />
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    
    Container:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#F3F4F6",
      alignItems: 'center',
      borderRadius: 12,
      height: 56,
      marginVertical: 12,
      paddingHorizontal: 20
    },
   
    text:{
        color: '#666C8E',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
    }
  
  })

export default SettingListItem