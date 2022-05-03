import React, {useState, useEffect} from 'react'
import { View, StyleSheet,  FlatList} from 'react-native'
import SettingListItem from './SettingListItem';
import { auth } from '../../services/firebase/config';
import { signOut } from "firebase/auth";
const SettingList = ({ navigation }) => {
    
    const [settingItems , setSettingItems] = useState([
        {text: 'Language' , link: () => null , icon: 'angle-right'},
        {text: 'Change Password' , link: () => null,icon: 'angle-right'},
        {text: 'Privacy' , link: () => null,icon: 'angle-right'},
        {text: 'Terms' , link: ()=>navigation.navigate('TermsScreen') ,icon: 'angle-right'},
        {text: 'SignOut' , link: async () => {
            signOut(auth).then(() => {
                navigation.navigate('LoginNavigation',{ screen:'LoginScreen'})
              }).catch((error) => {
              });
        },icon: 'sign-out'},
    ]);


    return(
        
        <View style={styles.Container}>
            <FlatList
             data={settingItems}
             renderItem={({item})=> <SettingListItem text={item.text} icon={item.icon} link={() => item.link()} />}
            />
        </View>
       
    )
}
const styles = StyleSheet.create({
    
    Container:{
    //   display: 'flex',
    //   flexDirection: 'row',
    //   alignItems:'center'
        marginTop: 24,
    },
   
  
  })

export default SettingList