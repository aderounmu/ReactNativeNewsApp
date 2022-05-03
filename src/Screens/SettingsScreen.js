import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native'
import Header from '../Components/general/Header'
import Profile from '../Components/settings/Profile'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase/config';
import SettingList from '../Components/settings/SettingList';


const SettingsScreen = ({navigation}) => {
    const [User, setUser] = useState({
        displayName: '.....',
        email: '.....'
    });
    useEffect(()=>{
        // setUser(auth)
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
        }
        });
    },[])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                {/* <Text>Settings Page</Text> */}
                <Header title={"Profile"}/>
                <Profile name={User.displayName} email={User.email} url={require('../assets/16.jpeg')} />
                <SettingList navigation={navigation}/>
            </View>
        </SafeAreaView>
       
    )
}
const styles = StyleSheet.create({
    container : {
        //  flex: 1,
      // marginLeft: 20,
        backgroundColor: '#fff',
        height:'100%'
    },
    subContainer:{
    //   flex: 1,
      marginHorizontal: 20,
      backgroundColor: '#fff'
    }
  
  })

export default SettingsScreen