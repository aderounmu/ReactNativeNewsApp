import React from 'react'
import { View, FlatList, StyleSheet, Text} from 'react-native';
import LatestCard from './LatestCard';
import CategoryPill from './CategoryPill';
const LatestSection = ({data , navigation}) => {
    
    return(
        <View style={styles.container}>
            {/* <Text>{data[2].author}</Text> */}
            <FlatList
            data = {data}
            horizontal={true}
            renderItem = {({item}) => <LatestCard item={item} navigation={navigation}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: 24,
        // backgroundColor: "red",
    }
})

export default LatestSection;