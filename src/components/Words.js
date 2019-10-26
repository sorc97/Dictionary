import React from 'react'
import Word from './Word'

const Words = ({words, onChange = f => f}) =>
  <ul className='words-list'>
    {
      words.map(item => 
        <Word 
          key={item.id} 
          {...item}
          onChange = {() => onChange(item.id)}
        />
      )
    }
  </ul>

export default Words
