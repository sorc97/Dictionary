import {createStore, combineReducers} from 'redux'
import {words, contextMenu} from './reducers'

const reducers = combineReducers({words, contextMenu})
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
console.log(store.getState());

store.subscribe(()=> console.log(store.getState()));

export default store;
