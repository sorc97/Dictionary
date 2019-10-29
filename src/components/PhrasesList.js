import React from 'react'

const PhrasesList = ({phrases = []}) =>
  <ul className='phrases-list'>
    { 
      phrases.map((item, i) => 
        <li className='phrases-item' key={i}>{item}</li>
      )
    }
  </ul>

export default PhrasesList
