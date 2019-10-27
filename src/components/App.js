import React from 'react'
import {
  NewWord,
  ComplexititesContainer,
  ChangeLangContainer
} from './Containers'

const App = () =>
  <div className='wrapper'>
    <NewWord/>
    <ChangeLangContainer/>
    <ComplexititesContainer/>
  </div>

export default App