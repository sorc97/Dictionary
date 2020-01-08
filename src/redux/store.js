import { createStore, combineReducers } from 'redux'
import { words, contextMenu, isAdding } from './reducers'

const reducers = combineReducers({ 
  words, 
  contextMenu,
  isAdding
})

const store = createStore(
  reducers,
  (localStorage['dictionary-words']) ?
    JSON.parse(localStorage['dictionary-words']) :
    {}
);

store.subscribe(() => {
  localStorage['dictionary-words'] = JSON.stringify({
    words: store.getState().words
  })
})

store.subscribe(() => console.log(store.getState()));

export default store;