import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import SettingHeader from '../Components/settings/SettingHeader'
import { Terms_conditions } from '../utils/constants'
const TermsScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <SettingHeader title={'Terms Condition'} navigation={navigation}/>
                <ScrollView>
                    <Text>{Terms_conditions}</Text>
                </ScrollView>
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
      backgroundColor: '#fff',
      marginBottom: 100
    }
  
  })

export default TermsScreen