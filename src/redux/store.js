import {createStore} from 'redux'
import {words} from './reducers'

const store = createStore(words);

store.subscribe(()=> console.log(store.getState()));

export default store;
