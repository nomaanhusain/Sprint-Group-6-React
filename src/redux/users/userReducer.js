import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from './userTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  // Reducer for user, this determine changes to user, uses action to determine change
  //Takes previous state and action to determine next state
  //This is how redux becomes predictable, as reducers are pure functions, and do not 
  //perform any side effect, given the same object, they always return the same result
  const userReducer = (state = initialState, action) => {
    // Switch Case to determine what is happening in the action and take step accordingly
    //"state" updates according to what is returned below
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default userReducer