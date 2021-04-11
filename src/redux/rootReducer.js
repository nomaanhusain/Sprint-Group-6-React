import { combineReducers } from 'redux'
import userReducer from './users/userReducer'
import digtestReducer from './diagnostictest/digtestReducer'
const rootReducer = combineReducers({
    users:userReducer,
    digtests:digtestReducer
})
export default rootReducer