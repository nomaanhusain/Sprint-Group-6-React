import axios from 'axios'
import {
  FETCH_DIGTEST_REQUEST,
  FETCH_DIGTEST_SUCCESS,
  FETCH_DIGTEST_FAILURE
} from './digtestTypes'

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
  export const fetchDigtestRequest = () => {
    return {
      type: FETCH_DIGTEST_REQUEST
    }
  }

  export const fetchDigtestSuccess = digtests => {
    return {
      type: FETCH_DIGTEST_SUCCESS,
      payload: digtests
    }
  }

  export const fetchDigtestFailure = error => {
    return {
      type: FETCH_DIGTEST_FAILURE,
      payload: error
    }
  }