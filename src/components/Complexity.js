import React from 'react'
import Words from './Words'

const Complexity = ({title, onChange = f => f, onSetContext = f=> f, words}) => {
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
        />
      }
    </div>
  )
}
  

export default Complexity