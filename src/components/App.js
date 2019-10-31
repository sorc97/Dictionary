import React from 'react'
import {
  NewWord,
  ComplexititesContainer,
  ChangeLangContainer,
  ContextMenuContainer,
  PhrasesContainer
} from './Containers'
import {Route} from 'react-router-dom'

const App = () =>
  <Route path='/' component={() => 
    <div className='wrapper'>
      <NewWord/>
      <ChangeLangContainer/>
      <ComplexititesContainer/>
      <ContextMenuContainer/>
      <Route path='/phrases/:id' component={PhrasesContainer}/>
    </div>
  }/>

export default App