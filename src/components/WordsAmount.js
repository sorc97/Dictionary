import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/WordsAmount.css'

const WordsAmount = ({ amount = 0, title = ""}) =>
  <span className='words-amount'>
    {title} {amount}
  </span>

WordsAmount.propTypes = {
  amount: PropTypes.number,
  title: PropTypes.string
}

export default WordsAmount