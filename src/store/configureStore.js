import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
}                           from 'redux'
import thunk                from 'redux-thunk'

import suggestionsReducer   from './reducers/suggestions'
import itemReducer          from './reducers/items'

const rootReducer = combineReducers({
  suggestions : suggestionsReducer,
  items       : itemReducer,
})

let composeEnhancers = compose

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configureStore
