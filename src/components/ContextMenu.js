import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './stylesheets/ContextMenu.css'

class ContextMenu extends Component {

  // Ref method
  getRef = (node) => { this._menu = node }

  // Life cycle 
  componentDidUpdate() {
    this.toggleContext();
  }

  // Context menu handling
  hideMenu = () => {
    let selectedElement = document.querySelector('.selected');

    if (selectedElement) {
      selectedElement.classList.remove('selected')
    }

    this.props.onHideMenu();
  }

  // Context menu coords related on window sizing
  calculateCoords = () => {
    const { left, top } = this.props.contextProps;
    // Window size
    const windowSize = {
      x: window.innerWidth,
      y: window.innerHeight
    }
    // Context menu size
    const contextMenuSize = {
      height: this._menu.offsetHeight,
      width: this._menu.offsetWidth
    }
    // New coords
    let newTopCoords = top + window.pageYOffset;
    let newLeftCoords = left + window.pageXOffset;
    // Positioning by the window top edge 
    if (top + contextMenuSize.height + 10 > windowSize.y) {
      newTopCoords -= contextMenuSize.height;
    }
    // Positioning by the window left edge 
    if (left + contextMenuSize.width + 10 > windowSize.x) {
      newLeftCoords -= contextMenuSize.width;
    }

    return {
      x: newLeftCoords,
      y: newTopCoords
    }
  }

  toggleContext = () => {
    const { isHidden } = this.props.contextProps;
    const { x, y } = this.calculateCoords();  // Get current coords

    if (isHidden) {  // Meke menu invisible
      window.removeEventListener('click', this.hideMenu);
      this._menu.hidden = true;
      return;
    }
    
    this._menu.hidden = isHidden;
    // Set menu coords
    this._menu.style.left = x + 'px';
    this._menu.style.top = y + 'px';
    // Set menu's close listener to window
    window.addEventListener('click', this.hideMenu);
  }

  handleSelect = select => {
    const {
      onChangeComplexity,
      onRemove,
      contextProps,
      history
    } = this.props;

    const { elemId } = contextProps;  // Context menu target id 

    switch (select) {
      case "remove":
        onRemove(elemId);
        break;

      case "phrases":
        history.push(`/phrases/${elemId}`)
        break;

      default:
        onChangeComplexity(select, elemId)
        break;
    }
  }

  render() {
    const { contextMenuItems, contextProps } = this.props;
    const { complexity } = contextProps;
    const { isHidden } = contextProps;

    return (
      <div
        className={
          (isHidden) ?
            'contextMenu-wrapper' :
            'contextMenu-wrapper active'
        }
        ref={this.getRef}
      >
        <ul className='contextMenu-list'>
          {
            Object.keys(contextMenuItems).map((key, i) =>
              key !== complexity &&  // Remove current complexity from menu
              <li
                key={i}
                onClick={() => this.handleSelect(key)}
              >
                <button
                  type='button'
                  className='contextMenu-item'
                >
                  {contextMenuItems[key]}
                </button>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

ContextMenu.propTypes = {
  contextProps: PropTypes.object,
  contextMenuItems: PropTypes.object,
  onChangeComplexity: PropTypes.func,
  onRemove: PropTypes.func,
  onHideMenu: PropTypes.func,
}

ContextMenu.defaultProps = {
  contextProps: {},
  contextMenuItems: {},
  onChangeComplexity: () => { },
  onRemove: () => { },
  onHideMenu: () => { },
}

export default withRouter(ContextMenu)