import C from './constants'
import { v4 } from 'uuid'

export const word = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_WORD:
      return {
        id: v4(),
        eng: action.eng.toLowerCase(),
        rus: action.rus.toLowerCase(),
        currentLang: 'eng',
        complexity: action.complexity,
        phrases: [],
        date: new Date()
      }

    case C.CHANGE_WORD:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          currentLang: (state.currentLang === 'eng') ? 'rus' : 'eng'
        }

    case C.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLang: action.changeValue
      }

    case C.CHANGE_COMPLEXITY:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          complexity: action.complexity
        }

    case C.ADD_PHRASE:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          phrases: [...state.phrases, action.phrase]
        }

    case C.REMOVE_PHRASE:
      return (state.id !== action.wordId) ?
        state :
        {
          ...state,
          phrases: state.phrases.filter(
            (phrase, i) => i !== action.phraseIndex
          )
        }

    default:
      return state
  }
}

export const words = (state = [], action) => {
  switch (action.type) {
    case C.ADD_WORD:
      return [
        ...state,
        word({}, action)
      ]

    case C.CHANGE_WORD:
    case C.CHANGE_LANGUAGE:
    case C.CHANGE_COMPLEXITY:
    case C.ADD_PHRASE:
    case C.REMOVE_PHRASE:
    case C.SET_EDITABLE_WORD:
    case C.EDIT_WORD:
      return state.map(item => word(item, action))

    case C.REMOVE_WORD:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export const contextMenu = (
  state = {
    left: 0,
    top: 0,
    elemId: "0",
    complexity: "none",
    size: {
      height: 0,
      width: 0
    },
    isHidden: true
  },
  action
) => {
  switch (action.type) {
    case C.SET_CONTEXT:
      return {
        ...state,
        left: action.left,
        top: action.top,
        elemId: action.id,
        complexity: action.complexity,
        isHidden: false
      }

    case C.HIDE_CONTEXT:
      return {
        ...state,
        isHidden: true
      }

    case C.SET_CONTEXT_SIZE:
      return {
        ...state,
        size: {
          height: action.height,
          width: action.width
        }
      }

    default:
      return state;
  }
}

export const isAdding = (state = false, action) => {
  switch(action.type) {
    case C.TOGGLE_ADDING: 
      return !state
    
    default: 
      return state;
  }
}