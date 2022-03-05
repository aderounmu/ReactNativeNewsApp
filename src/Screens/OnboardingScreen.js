import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'

export default function OnboardingScreen({navigation}) {
    // const [height, setHeight] = useState('');
    // const [width, setWidth] = useState('');
    // useEffect(() => {
    //     //Get device Height
    //     setHeight(Dimensions.get('window').height);
    //     //Get device Width
    //     setWidth(Dimensions.get('window').width);
    // }, []);
    
    return (
        <SafeAreaView style={{...styles.container,  height: '100%'}}>
            <View style={styles.subContainer}>
                <Image style={styles.image} source={require('../assets/onBoarding1.png')}/>
                <Text style={styles.headline}> First to Know</Text>
                <Text style={styles.subheadline}>All news in one place, be the first to know last news</Text>
                <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('WelcomeScreen') }>
                    <Text style={styles.btn.text}>
                    Next
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