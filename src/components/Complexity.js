import React from 'react'
import Words from './Words'
import './stylesheets/Complexity.css'

const Complexity = ({
  title, 
  onChange = f => f, 
  onSetContext = f=> f, 
  words, 
  contextMenuSize
}) => {
  const filteredWords = words.filter(item => item.complexity === title);

  return(
    <div className='complexity'>
      <h1 className='complexity-caption'>{title.toUpperCase()}</h1>
      {
        (!filteredWords.length) ?
        <p className='complexity-empty'>
          Empty
        </p> :
        <Words
          onChange = {onChange}
          onSetContext = {onSetContext}
          words = {filteredWords}
          contextMenuSize={contextMenuSize}
        />
      }
    </div>
  )
}
  

export default Complexity