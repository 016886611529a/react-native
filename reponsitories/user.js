import axios from "axios"
//adb shell input keyevent 82
//https://randomuser.me/api
const getUserDetails = async()=>{
    try{
        let res = await axios.get('https://randomuser.me/api')
    }catch(error){
        throw error
    }
}
const login = ({email, password})=>{

}
export default {
    getUserDetails,login
}