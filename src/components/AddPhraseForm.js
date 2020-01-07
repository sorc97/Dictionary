import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/AddPhraseForm.css'

const AddPhraseForm = ({ onNewPhrase = f => f }) => {
  let _phrase;

  const submit = e => {
    e.preventDefault();

    onNewPhrase(_phrase.value);
    _phrase.value = '';
    _phrase.focus();
  }

  return (
    <form onSubmit={submit} className='phrases-add-form'>
      <input
        type='text'
        name='addPhrase'
        placeholder='Add phrase'
        ref={input => _phrase = input}
        required
      />
      <button>ADD</button>
    </form>
  )
}

AddPhraseForm.propTypes = {
  onNewPhrase: PropTypes.func
}

export default AddPhraseForm;
