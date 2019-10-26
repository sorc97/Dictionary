import C from './constants'
import {v4} from 'uuid'

export const word = (state = {}, action) => {
  switch(action.type) {
    case C.ADD_WORD:
      return {
        id: v4(),
        eng: action.eng,
        rus: action.rus,
        currentLang: 'eng',
        comlexity: 'hard'
      }
    
    default:
      return state
  }
}

export const words = (state = [], action) => {
  switch(action.type) {
    case C.ADD_WORD:
      return [
        ...state,
        word({}, action)
      ]

    default:
      return state
  }
}