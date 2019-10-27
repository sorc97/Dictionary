import React from 'react'

const Word = ({eng = '', rus = '', currentLang = '', onChange = f=> f}) =>{

  const setContext = (e) => {
    
  }

  return(
    <li 
      className={(currentLang === 'eng') ? 'english' : 'russian'}
      onClick={onChange}
      onContextMenu={setContext}
    >
      {
        (currentLang === 'eng') ? eng: rus
      }
    </li>
  )
}

export default Word