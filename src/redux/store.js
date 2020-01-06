import { createStore, combineReducers } from 'redux'
import { words, contextMenu, isAdding } from './reducers'

const reducers = combineReducers({ 
  words, 
  contextMenu,
  isAdding
})

const store = createStore(
  reducers,
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}
);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify({
    words: store.getState().words
  })
})

store.subscribe(() => console.log(store.getState()));

export default store;