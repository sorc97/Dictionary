import C from './constants'

export const addWord = (eng, rus) => 
  ({
    type: C.ADD_WORD,
    eng,
    rus
  })

export const changeLang = (id) =>
  ({
    type: C.CHANGE_LANGUAGE,
    id
  })