import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setAuthLocal(
    user,
){
    try{
        let _json = JSON.stringify({
            user: user,
        })
        await AsyncStorage.setItem('@AuthDetails_Num',_json)
        console.log(user)
    }catch(err){
        throw err;
    }
}

export async function getAuthLocal(){
    try{
        const _jsonValue = await AsyncStorage.getItem('@AuthDetails_Num')
        return _jsonValue != null ? JSON.parse(jsonValue) : null;
    }catch(err){
        throw err;
    }
}

export async function deleteAuthLocal(){
    try{
        await AsyncStorage.removeItem('@AuthDetails_Num')
    }catch(err){
        throw err
    }
}