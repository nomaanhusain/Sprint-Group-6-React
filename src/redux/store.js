import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// Store holds the whole state of the application
// Any action returns a new state but the entire state is represented by a single store
const store = createStore(
    rootReducer,

    //Logger Middleware
    // logger logs actions in browser console and gives tracability

    //Thunk Middleware explanation
    // digtestAction return action objects that are caught in the reducer
    // then reducer returns the final action object according to the current state of the application
    //reducers are pure so it cannot make any api calls, so if you want an action to do something it needs to
    //be inside a function, thunk allows us to use functions as actions 
    composeWithDevTools(applyMiddleware(logger, thunk))
  )
  
  export default store