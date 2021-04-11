import { combineReducers } from 'redux'
import userReducer from './users/userReducer'
import digtestReducer from './diagnostictest/digtestReducer'

// Combine different reducers into a single reducer
const rootReducer = combineReducers({
    users:userReducer,
    digtests:digtestReducer
})
export default rootReducer