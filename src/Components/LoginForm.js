import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginForm({navigation}) {

    const [Password, setPassword] = useState("");
    const [ Username,setUsername] = useState("");

    const logIn = () => {

    }
  return (
    <View>
        {/* username */}
        <View style={styles.text_container}>
            <Icon name="envelope" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 70 }}
             onChangeText={text => setUsername(text)}
             placeholder="Username"
             value = {Username}
             />
        </View>
        {/* Password */}

        <View style={styles.text_container}>
            <Icon name="lock" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 100 }}
             onChangeText={text => setPassword(text)}
             placeholder="Password"
             value = {Password}
             />
        </View>

        <TouchableOpacity style={styles.forgotP} onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotP.text}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.btn}>
            <Text style={styles.btn.text}>
                Sign In
            </Text> 
        </TouchableOpacity>

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
    searchIcon:{
        // flex: 1,
        marginRight: 20
        
    },
    forgotP:{
        width: '100%',
        // paddingRight: 20,
        marginTop: 16,
        text :{
            textAlign: 'right'
        }
    },
    btn:{
        // width: '90%',
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