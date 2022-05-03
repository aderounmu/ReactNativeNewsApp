import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthInput from './AuthInput';
import GButton from '../general/GButton';
export default function ResetPasswordForm({navigation}) {

    const [Password, setPassword] = useState("");
    const [Rpassword, setRpassword] = useState("");
    const resetPassword = () => {

    }
  return (
    <View style={{ marginTop: 10}}>
        {/* Password */}

        <AuthInput value={Password} name="Password" icon="lock" onChange={(text) => setPassword(text)} />

        {/* Repeat Password */}
        <AuthInput value={Rpassword} name="Repeat Password" icon="lock" onChange={(text) => setRpassword(text)} />




        <GButton text="Confirm" onButtonPress={() => null} />

    </View>
  )
}


const styles = StyleSheet.create({
    
    
})