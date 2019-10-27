import {createStore} from 'redux'
import {words} from './reducers'

const initial = [
  {
    id: 11111,
    eng: 'HELLO',
    rus: 'ПРИВЕТ',
    currentLang: 'eng',
    complexity: 'medium'
  }
]
const store = createStore(words, initial);

store.subscribe(()=> console.log(store.getState()));

export default store;
