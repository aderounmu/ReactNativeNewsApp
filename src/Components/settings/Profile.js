import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'


const Profile = ({name, email, url}) => {
    return(
        
        <View style={styles.Container}>
            {/* <View style={styles.image_container}> */}
                <Image style={styles.image} source={url} />            
            {/* </View> */}
            <View style={styles.text_container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
       
    )
}
const styles = StyleSheet.create({
    
    Container:{
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center'
    },
   name:{
    color: 'black',
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
   },
   text_container:{
    marginLeft: 20
   },
   email:{
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
   },
   image_container:{
       height: 80,
   },
    image:{
        width: 72,
        height: 72,
        borderRadius: 80/2
    }
  
  })

export default Profile