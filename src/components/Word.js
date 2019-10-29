import React, {Component} from 'react'

class Word extends Component{
  constructor() {
    super();
    this.setContext = this.setContext.bind(this);
  }

  componentDidUpdate() {
    console.log('Word was UPDATE');
  }

  shouldComponentUpdate(newState) {
    const {currentLang} = this.props;

    return (currentLang === newState.currentLang) ? false: true;
  }

  setContext(e) {
    const {onSetContext} = this.props;
    
    e.preventDefault();
    onSetContext(e.pageX, e.pageY);
  }

  render() {
    const {eng, rus, currentLang, onChange} = this.props;

    return(
      <li 
        className={(currentLang === 'eng') ? 'english' : 'russian'}
        onClick={onChange}
        onContextMenu={this.setContext}
      >
        {
          (currentLang === 'eng') ? eng: rus
        }
      </li>
    )
  }
}

export default Word