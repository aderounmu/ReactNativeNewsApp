import React , {useState, useEffect} from 'react'
import { View, ScrollView, Text , StyleSheet , Image , FlatList , Button, SafeAreaView } from 'react-native'
import Header from '../Components/general/Header'
import CategoryPills from '../Components/home/CategoryPills'
import Loading from '../Components/general/Loading'
import SearchBar from '../Components/home/SearchBar'
import NoNewsError from '../Components/general/NoNewsError'
import LatestSection from '../Components/home/LatestSection'
import RecommendedSection from '../Components/home/RecommendedSection'
// import {NEWS_API_KEY} from "react-native-dotenv"
import {NEWS_API_KEY} from '../config.js'

// const NEWS_API_KEY="301243fd053f4d3bb5afa33eff41561c"

const HomeScreen = ({navigation}) => {
  const [newsData , setNewsData] = useState([])
  const [isfetching, setIsFetching] = useState(false)
  const [currentPill, setCurrentPill] = useState('Random')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // effect
    getLastNews()

    return () => {
      // cleanup
    }
  },[])

  const highlightPill = (data) =>{
      setCurrentPill(data)
  }

  const getLastNews = () => {
    setIsFetching(true)
    setIsError(false)
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setIsFetching(false)
      // console.log(data.articles[2])
      setNewsData(data.articles.splice(0,5))
    })
    .catch((error) => {
      setIsError(true)
      setIsFetching(false)
      console.error('Error:', error);
    });
  }

  const HomePageLoaded = () => {
    return (
      <>
        <LatestSection data={newsData} navigation={navigation}/>
        <RecommendedSection data={newsData}  navigation={navigation}/>
      </>
    )
  }  
  
  return(

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.subContainer}>
      {/* <View style={styles.subContainer}> */}
        <Header title="Browse" subtitle="Discover things of this world"/>
        <SearchBar/>
        <CategoryPills changeCurrentPill = {highlightPill} currentPill={currentPill}/>
        {
          isfetching ? <Loading/> : HomePageLoaded()
        }
        {
          isError ? <NoNewsError fetchData={getLastNews} /> : <Text></Text>//HomePageLoaded()
        }

      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // marginLeft: 20,
    backgroundColor: '#fff'
  },
  subContainer:{
    flex: 1,
    marginLeft: 20,
  }

})

export default HomeScreen;