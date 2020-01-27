import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/AddWordForm.css'

const AddWordForm = ({ onNewWord = f => f }) => {
  let _english, _russian, _complexity;  // Access to DOM elements

  const submit = e => {
    e.preventDefault();
    // Get data from fields
    let engWord = _english.value.toLowerCase().trim();
    let rusWord = _russian.value.toLowerCase().trim();
    let complexity = _complexity.value;
    // Reverse data flow
    onNewWord(engWord, rusWord, complexity);
    // Reset form fields
    _english.value = '';
    _russian.value = '';
    _english.focus();
  }

  return (
    <form className='addWord-form' onSubmit={submit}>
      <div className='text-fields'>
        <input type='text'
          ref={input => _english = input}
          placeholder="English"
          name='eng-word'
          lang='en'
          required
        />
        <input type='text'
          ref={input => _russian = input}
          placeholder="Russian"
          name='rus-word'
          lang='ru'
          required
        />
      </div>
      <div className='submit-wrapper'>
        <select
          className='addWord-complexity'
          defaultValue="hard"
          ref={input => _complexity = input}
        >
          <option value='hard'>Hard</option>
          <option value='medium'>Medium</option>
          <option value='easy'>Easy</option>
        </select>
        <button className='addWord-button'>
          ADD
        </button>
      </div>
    </form>
  )
}
// PropTypes
AddWordForm.propTypes = {
  onNewWord: PropTypes.func
}

export default AddWordForm