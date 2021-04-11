import axios from 'axios'
import {
  FETCH_DIGTEST_REQUEST,
  FETCH_DIGTEST_SUCCESS,
  FETCH_DIGTEST_FAILURE
} from './digtestTypes'


//Action for diagnostic test
//This will determine for action will occour
export const fetchDigtest = () => {
    return (dispatch)=>  {
      dispatch(fetchDigtestRequest())
      axios.get('http://localhost:9000/hcdtc/getAllDiagnosticTest').then(response => {
          // response.data is the users
          const digtests = response.data
          dispatch(fetchDigtestSuccess(digtests))
        }).catch(error => {
          // error.message is the error message
          dispatch(fetchDigtestFailure(error.message))
        })
    }
  }

  //Different funtions to descirbe what is happening in the application
  export const fetchDigtestRequest = () => {
    return {
      type: FETCH_DIGTEST_REQUEST
    }
  }

  export const fetchDigtestSuccess = digtests => {
    return {
      type: FETCH_DIGTEST_SUCCESS,
      // payload will be digtest if load was succesfull
      payload: digtests
    }
  }

  export const fetchDigtestFailure = error => {
    return {
      type: FETCH_DIGTEST_FAILURE,
      // Payload will be the error message if load was unsucessfull
      payload: error
    }
  }