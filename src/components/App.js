import React from 'react'
import {
  NewWord,
  WordsContainer,
  ChangeLangContainer
} from './Containers'

const App = () =>
  <div className='wrapper'>
    <NewWord/>
    <ChangeLangContainer/>
    <WordsContainer/>
  </div>

export default App