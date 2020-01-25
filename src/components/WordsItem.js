import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './stylesheets/WordsItem.css'

class WordsItem extends Component {

  shouldComponentUpdate(newState) {
    const { currentLang } = this.props;

    return (currentLang === newState.currentLang) ? false : true;
  }

  setContext = e => {
    const { onSetContext, complexity } = this.props;
    const target = e.target;
    const selectedElement = document.querySelector('.selected');

    if (selectedElement) {
      selectedElement.classList.remove('selected');
    }
    // Event coords
    const coords = {
      x: e.clientX,
      y: e.clientY
    }

    e.preventDefault();
    target.classList.add('selected');
    onSetContext(coords.x, coords.y, complexity);
  }

  render() {
    const { eng, rus, currentLang, onChange } = this.props;

    return (
      <li className='words-item'>
        <button
          type='button'
          className={
            (currentLang === 'eng') ?
              'word english' :
              'word russian'
          }
          onClick={onChange}
          onContextMenu={this.setContext}
        >
          {
            (currentLang === 'eng') ? eng : rus
          }
        </button>
      </li>
    )
  }
}

WordsItem.propTypes = {
  eng: PropTypes.string,
  rus: PropTypes.string,
  currentLang: PropTypes.string,
  onChange: PropTypes.func,
  onSetContext: PropTypes.func
}

WordsItem.defaultProps = {
  eng: "",
  rus: "",
  currentLang: "eng",
  onChange: () => { },
  onSetContext: () => { }
}

export default WordsItem