import React from 'react'
import AddPhraseForm from './AddPhraseForm'
import PhrasesList from './PhrasesList'
import PropTypes from 'prop-types'

class PhrasesModal extends React.Component{
  constructor() {
    super();

    this.hideModal = this.hideModal.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const {isModalHidden} = this.props;

    return (nextProps.isModalHidden && isModalHidden) ? false: true;
  }

  componentDidUpdate() {
    console.log("Modal was UPDATE");
  }

  hideModal(e){
    let target = e.target;
    const {onHideModal} = this.props;

    if(!target.classList.contains("phrases-modal")) return;

    onHideModal();
  }

  render() {
    const {word, isModalHidden, onNewPhrase} = this.props;

    return(
      <div 
        className={(isModalHidden) ? "phrases-modal": "phrases-modal active"} 
        onClick={this.hideModal}
      >
        <div className="phrases-content">
          <h1>{word.eng} - {word.rus}</h1>
          <AddPhraseForm onNewPhrase={phrase => onNewPhrase(phrase, word.id)}/>
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
  isModalHidden: PropTypes.bool,
  onHideModal: PropTypes.func,
  onNewPhrase: PropTypes.func
}

PhrasesModal.defaultProps = {
  word: {},
  isModalHidden: true,
  onHideModal: f => f,
  onNewPhrase: f => f
}
  
export default PhrasesModal