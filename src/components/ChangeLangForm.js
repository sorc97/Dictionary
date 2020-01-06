import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/ChangeLangForm.css'

const ChangeLangForm = ({ onChangeLang = f => f }) =>
  <form className='changeLang-form'>
    <button
      type='button'
      className='changeLang-button'
      onClick={() => onChangeLang('eng')}
    >
      English words
    </button>

    <button
      type='button'
      className='changeLang-button'
      onClick={() => onChangeLang('rus')}
    >
      Russian words
    </button>
  </form>

// PropTypes
ChangeLangForm.propTypes = {
  onChangeLang: PropTypes.func.isRequired
}

export default ChangeLangForm