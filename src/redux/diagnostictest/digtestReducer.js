import {
    FETCH_DIGTEST_REQUEST,
    FETCH_DIGTEST_SUCCESS,
    FETCH_DIGTEST_FAILURE
  } from './digtestTypes'

  // Initial stage of object
  const initialState = {
    loading: false,
    digtests: [],
    error: ''
  }

  // Reducer for diagnostic test, this determine changes to diagnostic test, uses action to determine change
  //Takes previous state and action to determine next state
  //This is how redux becomes predictable, as reducers are pure functions, and do not 
  //perform any side effect, given the same object, they always return the same result
  const digtestReducer = (state = initialState, action) => {
    // Switch Case to determine what is happening in the action and take step accordingly
    //"state" updates according to what is returned below
    switch (action.type) {
      case FETCH_DIGTEST_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DIGTEST_SUCCESS:
        return {
          loading: false,
          digtests: action.payload,
          error: ''
        }
      case FETCH_DIGTEST_FAILURE:
        return {
          loading: false,
          digtests: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default digtestReducer