import React from 'react'
import AddPhraseForm from './AddPhraseForm'
import PhrasesList from './PhrasesList'
import {withRouter} from 'react-router-dom'
import Modal from './Modal'
import ModalError from './ModalError'
import './stylesheets/PhrasesModal.css'

const PhrasesModal = ({
  word = {}, 
  onNewPhrase = f=> f, 
  onRemovePhrase = f=> f, 
  history 
}) => 
  (!Object.keys(word).length) ?
    <ModalError 
      title="Word not found" 
      history={history}/> :
    <Modal onHideModal={()=> history.replace('/')}>
      <React.Fragment>
        <h1 className="phrases-header">
          <span>{word.eng}</span> 
          <br/> 
          <span>{word.rus}</span>
        </h1>
        <AddPhraseForm 
          onNewPhrase={phrase => onNewPhrase(phrase, word.id)}/>
        {
          (!Object.keys(word).length) ? 
            "" :
            (!word.phrases.length) ? 
              <p>No phrases in the list</p> :
              <PhrasesList 
                phrases={word.phrases}
                onRemovePhrase={(phraseIndex) => onRemovePhrase(word.id, phraseIndex)}/>
        }
      </React.Fragment>
    </Modal>

  
export default withRouter(PhrasesModal)