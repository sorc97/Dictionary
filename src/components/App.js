import React from 'react'
import {
  NewWord,
  ComplexititesContainer,
  ChangeLangContainer,
  ContextMenuContainer,
  PhrasesContainer
} from './Containers'

const App = () =>
  <div className='wrapper'>
    <NewWord/>
    <ChangeLangContainer/>
    <ComplexititesContainer/>
    <ContextMenuContainer/>
    <PhrasesContainer/>
  </div>

export default App