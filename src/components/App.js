import React from 'react'
import {
  ContextMenuContainer,
  Phrases
} from './Containers'
import ModalError from './ModalError'
import Complexitites from './Complexities'
import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'

const App = () =>
  <Route path='/' component={() =>
    <div className='wrapper'>
      <Header />
      <Complexitites />
      <ContextMenuContainer />
      <Switch>
        <Route
          path='/phrases/error'
          component={({ history }) =>
            <ModalError history={history} title='Word not found' />}
        />
        <Route path='/phrases/:id' component={Phrases} />
      </Switch>
    </div>
  } />

export default App