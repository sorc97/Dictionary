import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './stylesheets/Word.css'

class Word extends Component {

  shouldComponentUpdate(newState) {
    const { currentLang } = this.props;

    return (currentLang === newState.currentLang) ? false : true;
  }

  setContext = e => {
    const {
      onSetContext,
      contextMenuSize
    } = this.props;

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
    // Window sizing
    const windowSize = {
      x: window.innerWidth,
      y: window.innerHeight
    }
    // New coords
    let newTopCoords = coords.y + window.pageYOffset;
    let newLeftCoords = coords.x + window.pageXOffset;
    /* let newTopCoords = e.pageY;
    let newLeftCoords = e.pageX; */

    // Context menu positioning relative to window size
    if (coords.y + contextMenuSize.height > windowSize.y) {
      newTopCoords -= contextMenuSize.height;
    }

    if (coords.x + contextMenuSize.width > windowSize.x) {
      newLeftCoords -= contextMenuSize.width;
    }

    e.preventDefault();
    target.classList.add('selected');
    onSetContext(newLeftCoords, newTopCoords);
  }

  render() {
    const { eng, rus, currentLang, onChange } = this.props;

    return (
      <li
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
      </li>
    )
  }
}

Word.propTypes = {
  eng: PropTypes.string,
  rus: PropTypes.string,
  currentLang: PropTypes.string,
  onChange: PropTypes.func,
  onSetContext: PropTypes.func,
  contextMenuSize: PropTypes.object
}

Word.defaultProps = {
  eng: "",
  rus: "",
  currentLang: "eng",
  onChange: () => { },
  onSetContext: () => { },
  contextMenuSize: {}
}

export default Word