import React from 'react'
import Word from './Word'
import './stylesheets/Words.css'

const Words = ({words, onChange = f => f, onSetContext = f=> f, contextMenuSize}) =>
  <ul className='words-list'>
    {
      words.map(item => 
        <Word 
          key={item.id} 
          {...item}
          onChange = {() => onChange(item.id)}
          onSetContext = {(left, top) => onSetContext(left, top, item.id)}
          contextMenuSize = {contextMenuSize}
        />
      )
    }
  </ul>

export default Words
