import {createStore, combineReducers, applyMiddleware} from 'redux'
const rootReducer = (state = [], action)=>{
    switch (action.type) {
        case 'ADD_TODO':
          return {...state,...action.payload}
          //return Object.assign({}, state, action.payload)
        default:
          return state
      }
}
const store = createStore(rootReducer)
export default store