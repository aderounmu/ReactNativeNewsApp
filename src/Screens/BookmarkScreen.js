import React,{ useEffect, useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Header from '../Components/general/Header'
import RecommendedSection from '../Components/home/RecommendedSection'
import { getUserDoc} from '../services/firebase/db'
import { getAuth } from 'firebase/auth'
import Loading from '../Components/general/Loading'
import NoNewsError from '../Components/general/NoNewsError'
// import { auth } from '../services/firebase/config'


const BookmarkScreen = ({navigation}) => {
    const [bookMark , setBookMark] = useState({})
    const [nobookMark , setNoBookMark] = useState(false)
    const [isfetching, setIsFetching] = useState(false)
    const [isError, setIsError] = useState(false)

    const loadBookmark = async () => {
        setIsFetching(true)
        setNoBookMark(false)
        setIsError(false)
        try{
                
            const auth = getAuth();
            const user = auth.currentUser;
            let data = { }
            if (user !== null) {
                data = await getUserDoc(user.uid)
                console.log(user.uid)
            }
            
            console.log(data)
            setBookMark(data.bookmark)

            setIsFetching(false)

            if(data.bookmark.articles.length === 0 ){
              setNoBookMark(true)
            }
        }catch(err){
            setIsFetching(false)
            setBookMark({})
            setIsError(true)
            // throw err
        }
    }

    
    

        useEffect(()=>{
            loadBookmark()  
        },[])
 return(
    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
        <Header title="Bookmarks" subtitle="Saved articles to the library"/>
        {
          isfetching ? <Loading/> : <RecommendedSection data={bookMark.articles} isHome={false} navigation={navigation} />
        }
        {
          isError ? <NoNewsError  fetchData={loadBookmark} /> : <></>//HomePageLoaded()
        }
        {
          nobookMark ? <NoNewsError message={'Sorry you have no bookmarks'}  fetchData={loadBookmark} /> : <></>
        }
        
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

export default BookmarkScreen