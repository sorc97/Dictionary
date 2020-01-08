import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/AddWordForm.css'

const AddWordForm = ({ onNewWord = f => f }) => {
  let _english, _russian, _complexity;

  const submit = e => {
    e.preventDefault();

    onNewWord(_english.value, _russian.value, _complexity.value);

    _english.value = '';
    _russian.value = '';
    _english.focus();
  }

  return (
    <form className='addWord-form' onSubmit={submit}>
      <input type='text'
        ref={input => _english = input}
        placeholder="English"
        required
      />
      <input type='text'
        ref={input => _russian = input}
        placeholder="Russian"
        required
      />
      <select 
        defaultValue="hard"
        ref={input => _complexity = input}
      >
        <option value='hard'>Hard</option>
        <option value='medium'>Medium</option>
        <option value='easy'>Easy</option>
      </select>
      <button className='addWord-button'>ADD</button>
    </form>
  )
}
// PropTypes
AddWordForm.propTypes = {
  onNewWord: PropTypes.func
}

export default AddWordForm