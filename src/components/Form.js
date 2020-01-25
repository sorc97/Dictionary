import React from 'react'
import PropTypes from 'prop-types'

const Form = ({
  handleSubmit, placeholder, button, className
}) => {

  let _inputField;  // Access to input's DOM element

  const submit = (e) => {
    e.preventDefault();

    const inputValue = _inputField.value;
    // Change state with input value
    handleSubmit(inputValue);
    // Reset form value
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

Form.propTypes = {
  placeholder: PropTypes.string,
  button: PropTypes.string,
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
}

export default Form