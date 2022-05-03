import React from 'react'
import {Text , View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
const GError = ({message}) => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        
    }}>
        <Icon name="error" size={20} color="#ED3447" style={{}} />
        <Text
          style={{
            fontSize: 17,
            color: '#ED3447'
          }}
        >{"  "}{ message}</Text>
    </View>
  )
}

export default GError