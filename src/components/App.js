import React from 'react'
import {
  NewWord,
  ComplexititesContainer,
  ChangeLangContainer,
  ContextMenuContainer,
  PhrasesContainer,
  Search
} from './Containers'
// import Modal from './Modal'
import ModalError from './ModalError'
import {Route, Switch} from 'react-router-dom'

const App = () =>
  <Route path='/' component={() => 
    <div className='wrapper'>
      <NewWord/>
      <Search/>
      <ChangeLangContainer/>
      <ComplexititesContainer/>
      <ContextMenuContainer/>
      <Switch>
        <Route 
          path='/phrases/error' 
          component={({history})=> 
            <ModalError history={history} title='Word not found'/>}
        />
        <Route path='/phrases/:id' component={PhrasesContainer}/>
      </Switch>
    </div>
  }/>

export default App