import React from 'react'
import { View, FlatList, StyleSheet, Text} from 'react-native';
import RecommendedCard from './RecommendedCard';
import RecommendedHeader from './RecommendedHeader';

const RecommendedSection = ({data, navigation}) => {
    
    return(
        <View style={styles.container}>
            <RecommendedHeader />
            <FlatList 
            data = {data}
            // horizontal={true}
            renderItem = {({item}) => <RecommendedCard item={item} navigation={navigation}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        // backgroundColor: "red",
    }
})

export default RecommendedSection;