import axios from 'axios'
const USER_BASE_URL='http://localhost:9000/hcr/';
class UserService{
    getAllUsers(){
        return axios.get(USER_BASE_URL+'/getalluser');
    }
    addUser(user){
        return axios.post(USER_BASE_URL+'/addUser',user);
    }
    validateUser(username,password){
        return axios.get(`${USER_BASE_URL}/validateUser/${username}`,password);
    }
    deleteUser(userId){
        return axios.delete(USER_BASE_URL+'/deleteUserById'+'/'+userId);
    }
}
export default new UserService()
