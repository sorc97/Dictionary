import C from './constants'

export const addWord = (eng, rus) => 
  ({
    type: C.ADD_WORD,
    eng,
    rus
  })

export const changeWord = (id) =>
  ({
    type: C.CHANGE_WORD,
    id
  })

export const changeLang = (changeValue) => 
  ({
    type: C.CHANGE_LANGUAGE,
    changeValue
  })