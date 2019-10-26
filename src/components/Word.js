import React from 'react'

const Word = ({eng, rus, currentLang, onChange}) =>
  <li 
    className = {(currentLang === 'eng') ? 'english' : 'russian'}
    onClick = {onChange}
  >
    {
      (currentLang === 'eng') ? eng: rus
    }
  </li>

export default Word