import React from 'react'
import { TouchableOpacity  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth } from 'firebase/auth';
import { bookMarkExist, addBookmark} from '../../services/firebase/db'

const addBookmark_btn = async (item) => {
    console.log('bookmark adding');
    const auth = getAuth();
    const user = auth.currentUser;
    try{
        let isExist = await bookMarkExist(item, user.uid)
        console.log(isExist)

        if(!isExist){
            await addBookmark(item, user.uid)
        }
    }catch(err){
        console.log(err.message)
    }
    
}


const BookmarkButton = ({bookmark, styles, item , navigation}) => {
   
    return (
    <TouchableOpacity disabled={bookmark} style={{...styles}} onPress={() => addBookmark_btn(item)}>
        <Icon name={bookmark ? "bookmark" : "bookmark-o"} size={24} color="#fff"  />
    </TouchableOpacity>
  )
}

export default BookmarkButton