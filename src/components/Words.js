import React from 'react'
import PropTypes from 'prop-types'
import WordsItem from './WordsItem'
import './stylesheets/Words.css'

const Words = ({
  words,
  onChange,
  onSetContext,
}) =>
  <ul className='words-list'>
    {
      words.map(item =>
        <WordsItem
          key={item.id}
          {...item}
          onChange={() => onChange(item.id)}
          onSetContext={
            (left, top, complexity) => onSetContext(left, top, item.id, complexity)
          }
        />
      )
    }
  </ul>

Words.propTypes = {
  words: PropTypes.array,
  onChange: PropTypes.func,
  onSetContext: PropTypes.func,
}

Words.defaultProps = {
  words: [],
  onChange: () => { },
  onSetContext: () => { },
}

export default Words
