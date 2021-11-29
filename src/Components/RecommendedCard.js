import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const RecommendedCard = ({item , navigation}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('News', {item: item})}>
            <Image style={styles.image} source={{ uri : item.urlToImage}}/>
            {/* <TouchableOpacity style={styles.textContainer}> */}
            <View style={styles.textContainer}>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            {/* </TouchableOpacity> */}
        </TouchableOpacity>
        );
    
    }
    
    const styles = StyleSheet.create({
        container : {
       
            marginLeft: 16,
            
            
            flexDirection: 'row',
            justifyContent:  'space-between',
            
            marginVertical: 16,
            
            
           
        },
        image:{
            width: 96,
            height: 96,
            borderRadius: 12,
            // marginRight: 20
        },
        
        textContainer:{
            paddingHorizontal: 16,
            // marginBottom: 30,
            // paddingBottom: 20,
            padding: 10,
            flexDirection: 'column',
            
            
        },
        
        author: {
            width: 256,
            color: 'black',
            fontSize: 12,
            marginBottom: 8,
            paddingRight: 20,
            color: '#B3B3B3',

        },
            
        title:{
            width: 256,
            color: 'black',
            fontSize: 16,
            paddingRight: 20
        },
        text:{
          fontSize: 18,
        },
      
    }) 


export default RecommendedCard;