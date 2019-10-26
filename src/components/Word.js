import React from 'react'

const Word = ({eng, rus, currentLang, onChangeLang}) =>
  <li 
    className = {(currentLang === 'eng') ? 'english' : 'russian'}
    onClick = {onChangeLang}
  >
    {
      (currentLang === 'eng') ? eng: rus
    }
  </li>

export default Word