import React from 'react'
import { TouchableOpacity  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth } from 'firebase/auth';
import { bookMarkExist} from '../../services/firebase/db'
const BookmarkButton = ({bookmark, styles, item , navigation}) => {
    const addBookmark = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        try{
            await bookMarkExist(item, user.uid)
        }catch(err){
            console.log(err.message)
        }
        
    }
    return (
    <TouchableOpacity disabled={bookmark} style={{...styles}} onPress={() => addBookmark()}>
        <Icon name={bookmark ? "bookmark" : "bookmark-o"} size={24} color="#fff"  />
    </TouchableOpacity>
  )
}

export default BookmarkButton