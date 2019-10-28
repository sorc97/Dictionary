import C from './constants'

export const addWord = (eng, rus) => 
  ({
    type: C.ADD_WORD,
    eng,
    rus
  })

export const removeWord = id =>
  ({
    type: C.REMOVE_WORD,
    id
  })

export const changeWord = id =>
  ({
    type: C.CHANGE_WORD,
    id
  })

export const changeLang = changeValue => 
  ({
    type: C.CHANGE_LANGUAGE,
    changeValue
  })

export const setContext = (left, top, id) =>
  ({
    type: C.SET_CONTEXT,
    left,
    top,
    id
  })

export const hideContext = () =>
  ({
    type: C.HIDE_CONTEXT
  })

export const changeComplexity = (newComplexity, id) =>
  ({
    type: C.CHANGE_COMPLEXITY,
    complexity: newComplexity,
    id
  })