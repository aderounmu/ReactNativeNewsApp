import React, { useState } from 'react'
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
const ListItem = ({item}) =>{
    return(
    <TouchableOpacity style={styles.container}>
        <View style={styles.itemView}>
            <Text style={styles.text}>{item.text}</Text>
            {/* <Icon name="remove" size={20} color="red" />  */}
        </View>
    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container : {
      padding: 15,
      backgroundColor: "#f8f8f9",
      margin: 5
    } ,
    itemView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 5,
    },
    text:{
      fontSize: 18,
    },
  
}) 

export default ListItem;