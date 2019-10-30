import React from 'react'

const PhrasesList = ({phrases = []}) =>
<div className='phrases-list-wrapper'>
  <ul className='phrases-list'>
      { 
        phrases.map((item, i) => 
          <li className='phrases-item' key={i}><span>{item}</span></li>
        )
      }
    </ul>
</div>
  

export default PhrasesList
