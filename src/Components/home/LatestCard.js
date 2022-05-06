import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BookmarkButton from '../general/BookmarkButton'
const LatestCard = ({item , navigation}) => {
    return(
        <View style={styles.container}>
            <BookmarkButton item={item} navigation={navigation} bookmark={false} styles={styles.bookmarkIconContainer} />
            <Image style={styles.image} source={{ uri : item.urlToImage}}/>
            <TouchableOpacity style={styles.textContainer}
                onPress={()=> navigation.navigate('News',{item: item})}
            >
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
        );
    
    }
    
    const styles = StyleSheet.create({
        container : {
        //   padding: 15,
            marginLeft: 16,
            backgroundColor: "grey",
            height:256,
            borderRadius: 12,
            position: 'relative'
        },
        image:{
            width: 256,
            height: 256,
            borderRadius: 12,
            backgroundColor: 'grey',
            opacity: 0.5,
            position: 'relative',
            // marginRight: 20
        },
        bookmarkIconContainer:{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 10,
            elevation: 10
        },
        textContainer:{
            position: 'relative',
            bottom: 100,
            width:256
        },
        
        author: {
            width: 256,
            color: 'white',
            fontSize: 12,
            marginVertical: 5,
            paddingHorizontal: 20,
        },
            
        title:{
            width: 256,
            color: 'white',
            fontSize: 16,
            paddingHorizontal: 20,
            // width: 256,
            
        },
        text:{
          fontSize: 18,
        },
      
    }) 


export default LatestCard;