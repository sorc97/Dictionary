import { createStore, combineReducers } from 'redux'
import { words, contextMenu, isAdding } from './reducers'

// Make one reducer based on the others
const reducers = combineReducers({
  words, 
  contextMenu,
  isAdding
})
// Create store based on reducers and initial state
const store = createStore(
  reducers,
  (localStorage['dictionary-words']) ?
    JSON.parse(localStorage['dictionary-words']) :
    {}
);
// Every time that store changes, refresh local storage
store.subscribe(() => {
  localStorage['dictionary-words'] = JSON.stringify({
    words: store.getState().words
  })
})

store.subscribe(() => console.log(store.getState()));

export default store;