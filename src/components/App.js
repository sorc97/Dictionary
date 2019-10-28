import React from 'react'
import {
  NewWord,
  ComplexititesContainer,
  ChangeLangContainer,
  ContextMenuContainer
} from './Containers'

const App = () =>
  <div className='wrapper'>
    <NewWord/>
    <ChangeLangContainer/>
    <ComplexititesContainer/>
    <ContextMenuContainer/>
  </div>

export default App