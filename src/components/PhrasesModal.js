import React from 'react'
import PropTypes from 'prop-types'
import AddPhraseForm from './AddPhraseForm'
import PhrasesList from './PhrasesList'
import Modal from './Modal'
import ModalError from './ModalError'
import { withRouter } from 'react-router-dom'
import './stylesheets/PhrasesModal.css'

const PhrasesModal = ({
  word = {},
  history,
  onNewPhrase = f => f,
  onRemovePhrase = f => f
}) => {

  const isWordFounded = Boolean(Object.keys(word).length);

  return (
    (!isWordFounded) ?
      <ModalError
        title="Word not found"
        history={history}
      /> :
      <Modal onHideModal={() => history.replace('/')}>
        <React.Fragment>
          <h1 className="phrases-header">
            <span>{word.eng}</span>
            <br />
            <span>{word.rus}</span>
          </h1>
          <AddPhraseForm
            onNewPhrase={phrase => onNewPhrase(phrase, word.id)} />
          {
            (isWordFounded) &&
            <PhrasesList
              phrases={word.phrases}
              onRemovePhrase={(phraseIndex) => onRemovePhrase(word.id, phraseIndex)} />
          }
        </React.Fragment>
      </Modal>
  )
}

PhrasesModal.propTypes = {
  word: PropTypes.object,
  history: PropTypes.object,
  onNewPhrase: PropTypes.func,
  onRemovePhrase: PropTypes.func
}

export default withRouter(PhrasesModal)