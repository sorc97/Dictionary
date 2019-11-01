import React from 'react'
import AddPhraseForm from './AddPhraseForm'
import PhrasesList from './PhrasesList'
import {withRouter} from 'react-router-dom'


const PhrasesModal = ({word = {}, onNewPhrase = f=> f, history}) => {

  const hideModal = e => {
    let target = e.target;

    if(!target.classList.contains("phrases-modal")) return;

    history.goBack();
  }

  return(
    <div 
      className='phrases-modal'
      onClick={hideModal}
    >
      <div className="phrases-content">
        <h1><span>{word.eng}</span> <br/> <span>{word.rus}</span></h1>
        <div onClick={()=> history.goBack()} 
          className="phrases-content-close">
            &times;
        </div>
        <AddPhraseForm 
          onNewPhrase={phrase => onNewPhrase(phrase, word.id)}/>
        {
          (!Object.keys(word).length) ?
            "" :
            (!word.phrases.length) ? 
              <p>No phrases in the list</p> :
              <PhrasesList phrases={word.phrases}/>
        }
      </div>
    </div>
  )
}
  
export default withRouter(PhrasesModal)