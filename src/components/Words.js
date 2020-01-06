import React from 'react'
import PropTypes from 'prop-types'
import Word from './Word'
import './stylesheets/Words.css'

const Words = ({
  words,
  contextMenuSize,
  onChange,
  onSetContext,
}) =>
  <ul className='words-list'>
    {
      words.map(item =>
        <Word
          key={item.id}
          {...item}
          onChange={() => onChange(item.id)}
          onSetContext={(left, top) => onSetContext(left, top, item.id)}
          contextMenuSize={contextMenuSize}
        />
      )
    }
  </ul>

Words.propTypes = {
  words: PropTypes.array,
  contextMenu: PropTypes.object,
  onChange: PropTypes.func,
  onSetContext: PropTypes.func
}

Words.defaultProps = {
  words: [],
  contextMenu: {},
  onChange: () => {},
  onSetContext: () => {}
}

export default Words
