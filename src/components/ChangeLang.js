import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/ChangeLang.css'

const ChangeLang = ({ onChangeLang = f => f }) =>
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
ChangeLang.propTypes = {
  onChangeLang: PropTypes.func.isRequired
}

export default ChangeLang