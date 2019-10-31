import {createStore, combineReducers} from 'redux'
import {words, contextMenu} from './reducers'

const initial = {
  words: [
    {
      id: 11111,
      eng: 'HELLO',
      rus: 'ПРИВЕТ',
      currentLang: 'eng',
      complexity: 'medium',
      phrases: []
    }
  ]
}

const reducers = combineReducers({words, contextMenu})
const store = createStore(reducers, initial);

console.log(store.getState());

store.subscribe(()=> console.log(store.getState()));

export default store;
