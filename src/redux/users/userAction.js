import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'
//Action for user


//This will determine what actions objects will be called
//This function is used to perform API calls and dispatch action
//This function is used as action using thunk
export const fetchUsers = () => {
    return (dispatch)=>  {
      dispatch(fetchUsersRequest())
      axios.get('http://localhost:9000/hcr/getalluser').then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        }).catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }

  //Action Creator
  export const fetchUsersRequest = () => {
    //This object is an action in redux
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  //Action Creator
  export const fetchUsersSuccess = users => {
    //This object is an action in redux
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  //Action Creator
  export const fetchUsersFailure = error => {
    //This object is an action in redux
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }