import React from 'react'

const AddPhraseForm = ({onNewPhrase = f => f}) => {
  let _phrase;

  const submit = e => {
    e.preventDefault();
    
    onNewPhrase(_phrase.value);
    _phrase.value = '';
    _phrase.focus();
  }

  return(
    <form onSubmit={submit} className='phrases-add-form'>
      <input 
        type='text' 
        placeholder='Add phrase'
        ref={input => _phrase = input}
        required
      />
      <button>ADD</button>
    </form>
  )
} 

export default AddPhraseForm;
