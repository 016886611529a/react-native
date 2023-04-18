import axios from "axios"

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