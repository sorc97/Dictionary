import React from 'react'

const AddWordForm = ({onNewWord = f => f}) => {
  let _english, _russian;

  const submit = e => {
    e.preventDefault();

    onNewWord(_english.value, _russian.value);
    
    _english.value = '';
    _russian.value = '';
    _english.focus();
  }

  return(
    <form className='addWord-form' onSubmit={submit}>
      <input type='text'
        ref = {input => _english = input}
        placeholder="English"
      />
      <input type='text'
        ref = {input => _russian = input}
        placeholder="Russian"
      />
      <button>ADD</button>
    </form>
  )
} 

export default AddWordForm