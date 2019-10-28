import React from 'react'
import Words from './Words'

const Complexity = ({title, onChange = f => f, onSetContext = f=> f,words}) => 
  <div className='complexity'>
    <h1 className='complexity-caption'>{title.toUpperCase()}</h1>
    <Words
      onChange = {onChange}
      onSetContext = {onSetContext}
      words = {words.filter(item => item.complexity === title)}
    />
  </div>

export default Complexity