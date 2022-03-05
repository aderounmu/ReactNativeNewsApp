import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'


const WelcomeScreen = ({navigation}) => {
    // const [height, setHeight] = useState('');
    // const [width, setWidth] = useState('');
    // useEffect(() => {
    //     //Get device Height
    //     setHeight(Dimensions.get('window').height);
    //     //Get device Width
    //     setWidth(Dimensions.get('window').width);
    // }, []);
    
    return (
        <SafeAreaView style={{...styles.container,  height: '100%', width: '100%'}}>
            <Image style={styles.image} source={require('../assets/welcomeImage.png')}/>
            <View style={styles.subContainer}>   
                <Text style={styles.headline}> Nuntium</Text>
                <Text style={styles.subheadline}>All news in one place, be the first to know last news</Text>
                <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('LoginScreen') }>
                    <Text style={styles.btn.text}>
                    Get Started
                    </Text> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 20,
        backgroundColor: '#fff', 

    },
    subContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    image :{
    
    },
    headline: {
       textAlign: 'center',
       paddingTop: 50,
       paddingBottom: 12,
       fontSize: 24,
       fontWeight: 'bold'
    },
    subheadline:{
        textAlign: 'center',
        width: 300,
        paddingTop: 12,
        paddingBottom: 50,
        fontSize: 16,
        
    },
    btn:{
        width: 300,
        backgroundColor: '#475AD7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        text :{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'white',
        }
    }
    
})

export default WelcomeScreen
