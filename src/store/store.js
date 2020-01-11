import {createStore, combineReducers, applyMiddleware} from 'redux'
import appReducer from '../reducer/appReducer'
import listReducer from '../reducer/listReducer'
const rootReducer = combineReducers({
  appReducer,
  listReducer
})

const store = createStore(rootReducer)
export default store