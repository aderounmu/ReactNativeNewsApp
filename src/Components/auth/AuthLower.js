import React from 'react'
import { View , StyleSheet, Text ,TouchableOpacity} from 'react-native'
const AuthLower = ({onLowerPress , NormalText , LinkText}) => {
  return (
    <View style={{...styles.subContainer, ...styles.signInContainer}}>
        <Text>{NormalText} </Text>
        <TouchableOpacity onPress={() => onLowerPress() }>
            <Text style={styles.signInContainer.NonTouch}>{LinkText}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        //display: 'flex',
        //flex: 1,
        marginHorizontal: 25
    },
    signInContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        NonTouch : {
            color: '#8C92AD'
        }
    }
})

export default AuthLower