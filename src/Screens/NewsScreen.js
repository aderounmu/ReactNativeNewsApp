import { Link } from '@react-navigation/native';
import React from 'react'
import { View, ScrollView, Text , StyleSheet , Image, Linking,SafeAreaView , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const NewsScreen = ({route,navigation}) =>{

    const { item } = route.params
    const openBrowser = () => {
        Linking.openURL(item.url)
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.IconContainer}>
                    <TouchableOpacity style={styles.backIcon} onPress = {()=> navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.bookmarkIcon}>
                            <Icon name="bookmark-o" size={24} color="#fff"  />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sharerIcon}>
                            <Icon name="share-square" size={24} color="#fff"  /> 
                        </TouchableOpacity>
                    </View>                    
                </View>
                <View style={styles.ImageContainer}>
                    <Image style={styles.articleImage} source={{ uri : item.urlToImage}}/>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentHeader}>Content</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <TouchableOpacity onPress={()=> openBrowser()} ><Text style={styles.readMore}>read more</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create(
    {

        container:{
            // marginTop: 20,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            width: '100%',
            backgroundColor: 'white',
            height: '100%'

            
        },
        contentContainer:{
            paddingHorizontal: 20,
            paddingTop: 10,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: 'white',
            position: 'relative',
            top: -140
        },
        ScrollView:{
            padding: -1,
            margin: -1,
            backgroundColor: 'white'
        },
        contentHeader:{
            fontSize: 16,
            marginVertical: 10
        },
        content:{
            color:"#666C8D",
            fontSize: 16,
            lineHeight: 24,
            marginBottom: 10,
            
            
        },
        ImageContainer:{
            position: "relative"
        },
        author:{
            position: "relative",
            bottom: 160,
            color: "white",
            fontSize: 12,
            padding: 10,
            borderRadius: 16,
            marginLeft: 20,
            width: 100,
            backgroundColor: "#092953",
            textAlign: 'center',
            overflow: 'hidden'


        },
        title:{
            position: "relative",
            bottom: 160,
            color: "white",
            marginLeft: 20,
            marginTop: 16,
            fontSize: 20,
            paddingRight: 20
        },
        articleImage:{
            width: '100%',
            height: 460,
            
        },
        IconContainer:{
            position: 'absolute',
            zIndex: 10,
            flexDirection: 'row',
            // alignItems:'center',
            justifyContent:'space-between',
            width: "100%",
            paddingHorizontal: 20,
            top: 50,
        },
        bookmarkIcon:{
            marginBottom: 10
        },
        readMore:{
            textDecorationLine:'underline'
        }
    }
)

export default NewsScreen;