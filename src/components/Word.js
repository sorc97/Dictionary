import React from 'react'

const Word = ({eng = '', rus = '', currentLang = '', onChange = f=> f, onSetContext = f=> f}) =>{

  const setContext = e => {
    e.preventDefault();
    onSetContext(e.pageX, e.pageY);
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