import React, {useState} from 'react'
import { View, FlatList, StyleSheet} from 'react-native';
import CategoryPill from './CategoryPill';

const categories = ['Random','Business','General','Health','Entertainment','Science','Sports','Technology']
const CategoryPills = ({changeCurrentPill , currentPill}) => {
    
    return(
        <View style={styles.container}>
            <FlatList
            data = {categories}
            horizontal={true}
            renderItem={({item}) => <CategoryPill changeCurrentPill={changeCurrentPill} currentPill={currentPill} item={item}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: 24
    }
})

export default CategoryPills;