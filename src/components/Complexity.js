import React from 'react'
import PropTypes from 'prop-types'
import { WordsList } from './Containers'
import './stylesheets/Complexity.css'

const Complexity = ({
  title = "unknown",
  words = [],
}) => {
  // Filter by complexity
  const filteredWords = words.filter(item => item.complexity === title);
  // Sort by date
  const sortedWords = filteredWords.sort((a, b) => a.date - b.date);
  
  return (
    <div className='complexity'>
      <h1 className='complexity-caption'>{title.toUpperCase()}</h1>
      {
        (!sortedWords.length) ?
          <p className='complexity-empty empty'>
            Empty
          </p> :
          <WordsList
            words={sortedWords}
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