import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecommendedHeader = () => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>Recommended for you</Text>
            <TouchableOpacity>
                <Text style={styles.seeAll}>see all</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'black',
        paddingRight: 20
    },

    text:{
        textAlign: 'left',
        fontSize: 20,
        color: 'black'
        
    },

    seeAll:{
        textAlign: 'right',
        color: '#B3B3B3',
        fontSize : 14
    }

})
export default RecommendedHeader;