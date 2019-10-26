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

    case C.CHANGE_LANGUAGE:
      return (state.id !== action.id) ?
        state:
        {
          ...state,
          currentLang: (state.currentLang === 'eng') ? 'rus': 'eng'
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

    case C.CHANGE_LANGUAGE:
      return state.map(item => word(item, action))

    default:
      return state
  }
}