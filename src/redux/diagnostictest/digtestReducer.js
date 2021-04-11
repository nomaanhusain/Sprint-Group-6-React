import {
    FETCH_DIGTEST_REQUEST,
    FETCH_DIGTEST_SUCCESS,
    FETCH_DIGTEST_FAILURE
  } from './digtestTypes'

  const initialState = {
    loading: false,
    digtests: [],
    error: ''
  }

  const digtestReducer = (state = initialState, action) => {
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