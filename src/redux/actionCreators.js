import C from './constants'

export const addWord = (eng, rus) => 
  ({
    type: C.ADD_WORD,
    eng,
    rus
  })