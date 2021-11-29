import React, {useState}from 'react'
import { View , StyleSheet, TextInput , Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBar = () =>{
    const [inputText, setInputText] = useState("")
    return (
        <View style={styles.container}>
            <Icon name="search" size={24} color="#7C82A0" style={styles.searchIcon} />
            <TextInput styles={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 70 }}
             onChangeText={text => setInputText(text)}
             placeholder="Search"
             value = {inputText}
             />
            {/* <Icon name="microphone" size={24} color="#7C82A0"  style={styles.micIcon}/> */}
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container:{
            flexDirection: "row",
            // justifyContent:'space-between',
            alignItems: 'center',
            height: 52,
            marginRight: 20,
            marginTop: Platform.OS === "android" ? 42 : 27,
            backgroundColor: "#C4C4",
            borderRadius: 12,
            paddingVertical: Platform.OS === "android" ? 5 :10,
            paddingHorizontal: 20,
            backgroundColor: '#F3F4F6',
        },
        input:{
            color: "#7C82A0",
            textAlign: 'left',
            
        },
        searchIcon:{
            // flex: 1,
            marginRight: 20
            
        },
        // micIcon:{
        //     // flex: 1,
        //     marginLeft: 200

        // }
    }
)

export default SearchBar