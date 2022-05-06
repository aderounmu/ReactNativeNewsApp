import {db} from './config'
import {collection ,arrayUnion, doc, query,where, addDoc ,getDocFromCache, getDoc,getDocs , Timestamp , updateDoc, setDoc, increment} from 'firebase/firestore'


//checks if doc exist 
export async function checkCollection(id){
    const docRef = doc(db,"user_data",id)
    const docSnap = await getDoc(docRef);
    return docSnap.exists()
}

//checks if bookmark exist 

export async function bookMarkExist(data, id){
    const q = query(collection(db, "user_data"),
     where("userID", "==", id),
     where("bookmark.articles.title", "==", data.title),
     where("bookmarktotalResults", "<=", 10)
     );
     const querySnapshot = await getDocs(q);
     console.log(querySnapshot)
    console.log(data)

}



//create new doc for new user
export async function setUpDoc(id){
    const docRef = doc(db,"user_data",id)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return 'Collection Exist' 
    else {
        await setDoc(docRef,{
            last_load: Timestamp.fromDate(new Date.now()),
            read_count : 0,
            userID: id,
            bookmark: {
                status: "ok",
                totalResults: 0,
                articles: []
            }
        })
    }
}
//increment users call
export async function increaseCall(id){
const docRef = doc(db, "user_data", id);
    try{
        await updateDoc(docRef,{
            "read_count" : increment(1),
            "last_load" : Timestamp.fromDate(new Date.now())
        })
        return 'successfully added'
    }catch(err){
        return { error: true , message: err.message}
    }
}


//add bookmark to docs
export async function addBookmark(id,data){
    const docRef = doc(db, "user_data", id);
    

    try{
        ////check if use has doc item

        await updateDoc(docRef,{
            "boomark.totalResults" : increment(1),
            "bookmark.articles" : arrayUnion(data)
        })
        return 'successfully added'
    }catch(err){
        return { error: true , message: err.message}
    }

}



//get user doc
export async function getUserDoc(id){
    const docRef = doc(db,"user_data",id)
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){  return docSnap.data();}
    else return 'No Document'
}

