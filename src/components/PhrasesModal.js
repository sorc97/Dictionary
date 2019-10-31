import React from 'react'
import AddPhraseForm from './AddPhraseForm'
import PhrasesList from './PhrasesList'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class PhrasesModal extends React.Component{
  constructor() {
    super();

    this.hideModal = this.hideModal.bind(this);
  }

  componentDidUpdate() {
    console.log("Modal was UPDATE");
  }

  hideModal(e){
    let target = e.target;
    const {history} = this.props;

    if(!target.classList.contains("phrases-modal")) return;

    history.goBack();
  }

  render() {
    const {word, onNewPhrase, history} = this.props;

    return(
      <div 
        className='phrases-modal'
        onClick={this.hideModal}
      >
        <div className="phrases-content">
          <h1><span>{word.eng}</span> <br/> <span>{word.rus}</span></h1>
          <div onClick={()=> history.goBack()} 
            className="phrases-content-close">
              &times;
          </div>
          <AddPhraseForm 
            onNewPhrase={phrase => onNewPhrase(phrase, word.id)}/>
          {
            (!Object.keys(word).length) ?
              "" :
              (!word.phrases.length) ? 
                <p>No phrases in the list</p> :
                <PhrasesList phrases={word.phrases}/>
          }
        </div>
      </div>
    )
  }
}

PhrasesModal.propTypes = {
  word: PropTypes.object,
  onNewPhrase: PropTypes.func
}

PhrasesModal.defaultProps = {
  word: {},
  onNewPhrase: f => f
}
  
export default withRouter(PhrasesModal)