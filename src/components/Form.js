import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ 
  handleSubmit, placeholder, button, className
}) => {
  let _inputField;

  const submit = (e) => {
    e.preventDefault();
    const inputValue = _inputField.value;

    handleSubmit(inputValue);
    
    _inputField.value = '';
    _inputField.focus();
  }

  return (
    <form
      onSubmit={submit}
      className={className}
    >
      <input
        type='text'
        placeholder={placeholder}
        ref={input => _inputField = input}
        required
      />
      <button>{button}</button>
    </form>
  )
}

export default Form