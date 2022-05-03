import React from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthInput = ({name,value , onChange, icon}) => {
  return (
    <View style={styles.text_container}>
    <Icon name={icon} size={24} color="#7C82A0" style={styles.Icon} />
        <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 70 }}
        onChangeText={text => onChange(text)}
        placeholder={name}
        autoCapitalize = 'none'
        autoCorrect={false}
        value = {value}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    text_container:{
        flexDirection: "row",
        // justifyContent:'space-between',
        alignItems: 'center',
        height: 52,
        // marginRight: 20,
        marginTop: Platform.OS === "android" ? 42 : 27,
        backgroundColor: "#C4C4",
        borderRadius: 12,
        paddingVertical: Platform.OS === "android" ? 5 :10,
        paddingHorizontal: 20,
        backgroundColor: '#F3F4F7',
    },
    input:{
        color: "#7C82A0",
        textAlign: 'left',
    },
    Icon:{
        // flex: 1,
        marginRight: 20
        
    },
})

export default AuthInput