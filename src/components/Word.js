import React, { Component } from 'react'
import './stylesheets/Word.css'

class Word extends Component {

  componentDidUpdate() {
    // console.log('Word was UPDATE');
  }

  shouldComponentUpdate(newState) {
    const { currentLang } = this.props;

    return (currentLang === newState.currentLang) ? false : true;
  }

  setContext = e => {
    const { 
      onSetContext, 
      contextMenuSize, 
      isConextHidden 
    } = this.props;

    const target = e.target; 
    const selectedElement = document.querySelector('.selected');

    if(selectedElement) {
      selectedElement.classList.remove('selected');
    }

    const coords = {
      x: e.clientX,
      y: e.clientY
    }
    
    const windowSize = {
      x: window.innerWidth,
      y: window.innerHeight
    }

    let newTopCoords = coords.y + window.pageYOffset;
    let newLeftCoords = coords.x + window.pageXOffset;
    /* let newTopCoords = e.pageY;
    let newLeftCoords = e.pageX; */

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

export default Word