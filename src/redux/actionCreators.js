import C from './constants'

// Word actions
export const addWord = (eng, rus, complexity) => ({
  type: C.ADD_WORD,
  eng,
  rus,
  complexity
})

export const removeWord = id => ({
  type: C.REMOVE_WORD,
  id
})

export const changeWord = id => ({
  type: C.CHANGE_WORD,
  id
})

export const changeLang = changeValue => ({
  type: C.CHANGE_LANGUAGE,
  changeValue
})

export const changeComplexity = (newComplexity, id) => ({
  type: C.CHANGE_COMPLEXITY,
  complexity: newComplexity,
  id
})

// Context actions
export const setContext = (left, top, id, complexity) => ({
  type: C.SET_CONTEXT,
  left,
  top,
  id,
  complexity
})

export const setContextSize = (height, width) => ({
  type: C.SET_CONTEXT_SIZE,
  height,
  width
})

export const hideContext = () => ({
  type: C.HIDE_CONTEXT
})

// Phrases actions
export const addPhrase = (phrase, id) => ({
  type: C.ADD_PHRASE,
  phrase,
  id
})

export const removePhrase = (wordId, phraseIndex) => ({
  type: C.REMOVE_PHRASE,
  wordId,
  phraseIndex
})

// Other actions
export const toggleAdding = () => ({
  type: C.TOGGLE_ADDING
})


