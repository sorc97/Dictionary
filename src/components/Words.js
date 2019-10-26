import React from 'react'
import Word from './Word'

const Words = ({words, onChangeLang = f => f}) =>
  <ul className='words-list'>
    {
      words.map(item => 
        <Word 
          key={item.id} 
          {...item}
          onChangeLang = {() => onChangeLang(item.id)}
        />
      )
    }
  </ul>

export default Words
