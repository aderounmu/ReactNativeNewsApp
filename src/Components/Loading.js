import React from 'react'
import { View, StyleSheet, ActivityIndicator , Text } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>
                Please give us a moment
                while we get things started

            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
        height: 200,
    },
    text:{
        fontSize: 18, 
        textAlign: 'center',
        marginTop: 25,
        color: 'black'
    }
})

export default Loading;