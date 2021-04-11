import axios from 'axios'
const LOGIN_BASE_URL='http://localhost:9000/login/';
//http://localhost:9000/login/loginuser

class LoginService{
    loginUser(user){
        console.log(user);
        return axios.post(LOGIN_BASE_URL+'loginuser',user);
    }
    logoutUser(){
        return axios.get(LOGIN_BASE_URL+'logout');
    }
}
export default new LoginService()