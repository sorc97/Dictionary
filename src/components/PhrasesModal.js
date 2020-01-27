import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import PhrasesList from './PhrasesList'
import Modal from './Modal'
import ModalError from './ModalError'
import PhrasesHeader from './PhrasesHeader'
import { withRouter } from 'react-router-dom'
import './stylesheets/PhrasesModal.css'

const PhrasesModal = ({
  word,
  history,
  onNewPhrase,
  onRemovePhrase
}) => {

  const isWordFounded = Boolean(Object.keys(word).length);

  return (
    (!isWordFounded) ?
      <ModalError
        title="Word not found"
        history={history}
      /> :
      <Modal onHideModal={() => history.replace('/')}>
        <>
          <PhrasesHeader
            word={word.eng}
            translation={word.rus}
          />
          <Form
            handleSubmit={phrase => onNewPhrase(phrase, word.id)}
            className='phrases-add-form'
            button="ADD"
            placeholder='Add phrase' />
          {
            (isWordFounded) &&
            <PhrasesList
              phrases={word.phrases}
              onRemovePhrase={(phraseIndex) => onRemovePhrase(word.id, phraseIndex)} />
          }
        </>
      </Modal>
  )
}

PhrasesModal.propTypes = {
  word: PropTypes.object,
  history: PropTypes.object,
  onNewPhrase: PropTypes.func,
  onRemovePhrase: PropTypes.func
}

PhrasesModal.defaultProps = {
  word: {},
  onNewPhrase: () => { },
  onRemovePhrase: () => { }
}

export default withRouter(PhrasesModal)