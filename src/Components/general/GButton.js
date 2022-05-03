import React from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
const GButton = ({text , onButtonPress , width}) => {
    let widthStyle = {}
    if(width !== undefined){
        widthStyle.width = width
    }
  return (
    <>
    <TouchableOpacity  style={{...styles.btn , ...widthStyle}} onPress = { () => onButtonPress()}>
        <Text style={styles.btn.text}>
            {text}
        </Text> 
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
         
    btn:{
       
        // width: '100%',
        backgroundColor: '#475AD7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 50,
        text :{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'white',
        }
    }
})

export default GButton