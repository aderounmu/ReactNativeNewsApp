import React, {useState}from 'react'
import { View , StyleSheet, TextInput,Text , Platform, TouchableOpacity} from 'react-native'
import AuthInput from './AuthInput'
import GButton from '../general/GButton'
export default function ForgotPassWordForm({navigation}) {
    const [Email, setEmail] = useState("")
    const forgot = () => {

    }
  return (
    <View style={{ marginTop: 10}}>

        {/* Email */}
        <AuthInput value={Email} name="Email" icon="envelope" onChange={(text) => setEmail(text)} />
       
       <GButton text="Next" onButtonPress={() => navigation.navigate('ResetPasswordScreen')} />

    </View>
  )
}


const styles = StyleSheet.create({
   
    
})
