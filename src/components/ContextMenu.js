import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './stylesheets/ContextMenu.css'

class ContextMenu extends Component {

  componentDidUpdate() {
    this.toggleContext();
    // console.log("UPDATE");
  }

  componentDidMount() {
    const {onSetContextSize} = this.props;
    const {_menu} = this.refs;
    
    onSetContextSize(_menu.offsetHeight, _menu.offsetWidth);
  }

  hideMenu = () => {
    this.props.onHideMenu();
  }

  toggleContext = () => {
    const {left, top, isHidden} = this.props.contextProps;
    const {_menu} = this.refs; 

    if(isHidden) {
      window.removeEventListener('click', this.hideMenu);
      return;
    } 

    _menu.hidden = isHidden;
    _menu.style.left = left + 'px';
    _menu.style.top = top + 'px';
    window.addEventListener('click', this.hideMenu);
  }

  handleSelect = select => {
    const {onChangeComplexity, onRemove, contextProps, history} = this.props;
    const {elemId} = contextProps;
    console.log(select)
    
    switch(select) {
      case "remove":
        onRemove(elemId);
      break;
      
      case "add to easy":
        onChangeComplexity('easy', elemId)
      break;
      
      case "add to medium":
        onChangeComplexity('medium', elemId)
      break;

      case "phrases":
          history.push(`/phrases/${elemId}`)
      break;

      default:
        onChangeComplexity('hard', elemId)
      break;
    }
  }

  render() {
    const {contextMenuItems} = this.props;
    const {isHidden} = this.props.contextProps;
    
    return(
      <div 
        className= {(isHidden) ? 'contextMenu-wrapper': 'contextMenu-wrapper active'} 
        ref='_menu'
      >
        <ul className='contextMenu-list'>
          {
            contextMenuItems.map((item, i) => 
              <li 
                className='contextMenu-item' 
                key={i}
                onClick={() => this.handleSelect(item.toLowerCase())}
              >
                {item}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
 
export default withRouter(ContextMenu)