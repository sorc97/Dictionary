import React from 'react'
import Complexity from './Complexity'

const Complexitites = ({words = [], onChange = f => f, onSetContext = f => f}) =>
  <div className='complexity-wrapper'>
    <Complexity title = 'hard' 
      onChange = {onChange}
      onSetContext = {onSetContext}
      words = {words}
    />
    <Complexity title = 'medium' 
      onChange = {onChange}
      onSetContext = {onSetContext}
      words = {words}
    />
    <Complexity title = 'easy' 
      onChange = {onChange}
      onSetContext = {onSetContext}
      words = {words}
    />
  </div>

export default Complexitites
