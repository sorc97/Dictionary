import React from 'react'
import PropTypes from 'prop-types'
import { WordsList } from './Containers'
import './stylesheets/Complexity.css'

const Complexity = ({
  title = "unknown",
  words = [],
}) => {
  const filteredWords = words.filter(item => item.complexity === title);

  return (
    <div className='complexity'>
      <h1 className='complexity-caption'>{title.toUpperCase()}</h1>
      {
        (!filteredWords.length) ?
          <p className='complexity-empty'>
            Empty
          </p> :
          <WordsList
            words={filteredWords}
          />
      }
    </div>
  )
}

Complexity.propTypes = {
  title: PropTypes.string,
  words: PropTypes.array
}

export default Complexity