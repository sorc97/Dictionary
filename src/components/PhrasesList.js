import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/PhrasesList.css'

const PhrasesList = ({ phrases = [], onRemovePhrase = f => f }) =>
  (!phrases.length) ?
    <p className='empty'>No phrases in the list</p> :
    <div className='phrases-wrapper'>
      <ul className='phrases-list'>
        {
          phrases.map((item, i) =>
            <li className='phrases-item' key={i}>
              <span>{item}</span>
              <span className='phrases-item-remove'
                onClick={() => onRemovePhrase(i)}>
                &times;
              </span>
            </li>
          )
        }
      </ul>
    </div>

PhrasesList.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string),
  onRemovePhrase: PropTypes.func
}

export default PhrasesList
