import React from 'react'
import {
  ContextMenuContainer,
  Phrases,
  HeaderContainer
} from './Containers'
import Complexities from './Complexities'
import { Route } from 'react-router-dom'
import './stylesheets/App.css'

const App = () =>
  <Route path='/' component={() =>
    <div className='wrapper'>
      <HeaderContainer />
      <Complexities />
      <ContextMenuContainer />
      <Route path='/phrases/:id' component={Phrases} />
    </div>
  } />

export default App