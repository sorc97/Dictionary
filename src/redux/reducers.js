import C from './constants'
import {v4} from 'uuid'

export const word = (state = {}, action) => {
  switch(action.type) {
    case C.ADD_WORD:
      return {
        id: v4(),
        eng: action.eng.toUpperCase(),
        rus: action.rus.toUpperCase(),
        currentLang: 'eng',
        complexity: 'hard'
      }

    case C.CHANGE_WORD:
      return (state.id !== action.id) ?
        state:
        {
          ...state,
          currentLang: (state.currentLang === 'eng') ? 'rus': 'eng'
        }

    case C.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLang: action.changeValue
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

    case C.CHANGE_WORD:
    case C.CHANGE_LANGUAGE:
      return state.map(item => word(item, action))

    default:
      return state
  }
}

export const context = (state = {left: 0, top: 0, elemId: 0, isHidden: true}, action) => {
  switch(action.type) {
    
  }
}