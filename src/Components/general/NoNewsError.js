import React from 'react'
import { View,Text , StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const NoNewsError = ({fetchData,message}) => {
    return (
        <View style={[styles.mainContainer, styles.container]}>
            <Icon name="exclamation-triangle" size={60} color="#092953" style={styles.searchIcon} />
            <Text style={styles.headlineText}>
            {!message ? 'Sorry Something Went Wrong' : message}
            </Text>
           
            <TouchableOpacity style={styles.container} onPress={()=>fetchData()}>
                <Text style={styles.refreshText}>
                    Tap to refresh
                </Text>
                <Icon name="refresh" size={30} color="#7C82A0" style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer :{
        marginVertical: 70,
        marginHorizontal: 50,
        height: 200,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    headlineText:{
        fontSize: 18, 
        textAlign: 'center',
        marginVertical: 25,
        color: 'black'
    },
    refreshText:{
        
    }
})

export default NoNewsError ; 