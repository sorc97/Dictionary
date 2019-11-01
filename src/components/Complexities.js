import React from 'react'
import Complexity from './Complexity'

const Complexitites = ({words = [], onChange = f => f, onSetContext = f => f, contextMenuSize}) =>
  <div className='complexity-wrapper'>
    <Complexity title='hard' 
      onChange={onChange}
      onSetContext={onSetContext}
      words={words}
      contextMenuSize={contextMenuSize}
    />
    <Complexity title='medium' 
      onChange={onChange}
      onSetContext={onSetContext}
      words={words}
      contextMenuSize={contextMenuSize}
    />
    <Complexity title='easy' 
      onChange={onChange}
      onSetContext={onSetContext}
      words={words}
      contextMenuSize={contextMenuSize}
    />
  </div>

export default Complexitites
