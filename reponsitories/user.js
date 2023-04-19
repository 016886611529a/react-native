import axios from 'axios';
//adb shell input keyevent 82
//https://randomuser.me/api
const SERVER_NAME = 'randomuser.me'
const getUserDetails = async () => {
  try {
    let res = await axios.get(`https://${SERVER_NAME}/api`);
    if (res.status != 200) {
      throw 'Failed request';
    }
    if (res.data.results.length > 0) {
      let responseUser = res.data.results[0];
      let user = {};
      user.dateOfBirth = new Date(responseUser.dob.date)?? "";
      user.email = responseUser.email ?? '';
      user.gender = responseUser.gender ?? 'male'; //default value
      user.userId = `${responseUser.id.name}${responseUser.id.value}`;
      user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`;
      user.username = responseUser.login.username ?? '';
      user.url = responseUser.picture.large ?? '';
      user.phone = responseUser.phone ?? '';
      user.registered = new Date(responseUser.registered.date);
        
      return user;
    }
    throw 'User not found';
  } catch (error) {
    throw error;
  }
};
const login = ({email, password}) => {};
export default {
  getUserDetails,
  login,
};
