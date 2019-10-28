import React, {Component} from 'react'

class ContextMenu extends Component {
  constructor(props) {
    super(props);

    this.toggleContext = this.toggleContext.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidUpdate() {
    this.toggleContext();
    // console.log("UPDATE")
  }

  hideMenu() {
    this.props.onHideMenu();
    // console.log('WAS HIDDEN')
  }

  toggleContext() {
    const {left, top, isHidden} = this.props.contextProps;
    const {_menu} = this.refs; 
    console.log(isHidden);

    if(isHidden) {
      window.removeEventListener('click', this.hideMenu);
      return;
    } 

    _menu.hidden = isHidden;
    _menu.style.left = left + 'px';
    _menu.style.top = top + 'px';
    window.addEventListener('click', this.hideMenu);
  }

  handleSelect(select) {
    const {onChangeComplexity, onRemove, contextProps} = this.props;
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
        // className='contextMenu-wrapper'
        ref='_menu'
        // hidden
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
 
export default ContextMenu