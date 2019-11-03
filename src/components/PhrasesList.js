import React from 'react'

const PhrasesList = ({phrases = [], onRemovePhrase = f=> f}) =>
<div className='phrases-list-wrapper'>
  <ul className='phrases-list'>
      { 
        phrases.map((item, i) => 
          <li className='phrases-item' key={i}>
            <span>{item}</span>
            <span className='phrases-item-remove'
              onClick={() => onRemovePhrase(i)}>
              &times;
            </span>
          </li>
        )
      }
    </ul>
</div>
  

export default PhrasesList
