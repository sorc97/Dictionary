import React from 'react'
import Complexity from './Complexity'

const Complexitites = ({words = [], onChange = f => f}) =>
  <div className='complexity-wrapper'>
    <Complexity title = 'hard' 
      onChange = {onChange}
      words = {words}
    />
    <Complexity title = 'medium' 
      onChange = {onChange}
      words = {words}
    />
    <Complexity title = 'easy' 
      onChange = {onChange}
      words = {words}
    />
  </div>

export default Complexitites
