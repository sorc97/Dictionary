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

  componentDidMount() {
    const { onSetContextSize } = this.props;

    onSetContextSize(this._menu.offsetHeight, this._menu.offsetWidth);
  }

  // Context menu handling
  hideMenu = () => {
    let selectedElement = document.querySelector('.selected');

    if (selectedElement) {
      selectedElement.classList.remove('selected')
    }

    this.props.onHideMenu();
  }

  toggleContext = () => {
    const { left, top, isHidden } = this.props.contextProps;

    if (isHidden) {
      window.removeEventListener('click', this.hideMenu);
      this._menu.hidden = true;
      return;
    }

    this._menu.hidden = isHidden;
    this._menu.style.left = left + 'px';
    this._menu.style.top = top + 'px';
    window.addEventListener('click', this.hideMenu);
  }

  handleSelect = select => {
    const { 
      onChangeComplexity, 
      onRemove, 
      contextProps, 
      history 
    } = this.props;
    const { elemId } = contextProps;
    console.log(select)

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
    const { contextMenuItems } = this.props;
    const { isHidden } = this.props.contextProps;

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
              <li
                className='contextMenu-item'
                key={i}
                onClick={() => this.handleSelect(key)}
              >
                {contextMenuItems[key]}
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
  onSetContextSize: PropTypes.func
}

ContextMenu.defaultProps = {
  contextProps: {},
  contextMenuItems: {},
  onChangeComplexity: () => {},
  onRemove: () => {},
  onHideMenu: () => {},
  onSetContextSize: () => {}
}

export default withRouter(ContextMenu)