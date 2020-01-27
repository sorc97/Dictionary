import { connect } from 'react-redux'
import {
  addWord,
  changeWord,
  changeLang,
  setContext,
  changeComplexity,
  removeWord,
  hideContext,
  addPhrase,
  removePhrase,
  toggleAdding
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'
import ChangeLang from './ChangeLang'
import Words from './Words'
import ContextMenu from './ContextMenu'
import PhrasesModal from './PhrasesModal'
import Complexity from './Complexity'
import Toggler from './Toggler'
import Toggleable from './Toggleable'
import Header from './Header'
import { findById, findByTitle } from '../lib/array-helpers'
import Form from './Form'
import { withRouter } from 'react-router-dom'

//Add Word Form
export const NewWord = connect(
  null,
  dispatch => ({
    onNewWord(eng, rus, complexity) {
      dispatch(addWord(eng, rus, complexity))
    }
  })
)(AddWordForm)

// SearchForm
export const HeaderContainer = connect(
  ({ words }) => ({
    wordsSum: words.length
  })
)(Header)

//Change Language Form
export const ChangeLangContainer = connect(
  null,
  dispatch => ({
    onChangeLang(changeValue) {
      dispatch(changeLang(changeValue))
    }
  })
)(ChangeLang)

//Complexity 
export const ComplexityContainer = connect(
  ({ words }, { title }) => ({
    words,
    title
  })
)(Complexity)

//Words List
export const WordsList = connect(
  null,
  dispatch => ({
    onChange(id) {
      dispatch(changeWord(id))
    },
    onSetContext(left, top, id, complexity) {
      dispatch(setContext(left, top, id, complexity))
    }
  })
)(Words)

//Context Menu
export const ContextMenuContainer = connect(
  state => ({
    contextProps: state.contextMenu,
    contextMenuItems: {
      easy: "Add to easy",
      medium: "Add to medium",
      hard: "Add to hard",
      phrases: "Phrases",
      remove: "Remove"
    }
  }),
  dispatch => ({
    onChangeComplexity(newComplexity, id) {
      dispatch(changeComplexity(newComplexity, id))
    },
    onRemove(id) {
      dispatch(removeWord(id))
    },
    onHideMenu() {
      dispatch(hideContext())
    }
  })
)(ContextMenu)

// PhrasesModal
export const Phrases = connect(
  ({ words }, { match }) => ({
    word: findById(words, match.params.id),
  }),
  dispatch => ({
    onNewPhrase(phrase, id) {
      dispatch(addPhrase(phrase, id))
    },
    onRemovePhrase(wordId, phraseIndex) {
      dispatch(removePhrase(wordId, phraseIndex))
    }
  })
)(PhrasesModal)

// Add Toggler
export const AddToggler = connect(
  ({ isAdding }, { className }) => ({
    condition: isAdding,
    open: "+",
    close: "×",
    className
  }),
  dispatch => ({
    toggleHandler() {
      dispatch(toggleAdding())
    }
  })
)(Toggler)

// Toggleable Adding
export const ToggleableAdding = connect(
  ({ isAdding }, { className }) => ({
    condition: isAdding,
    className
  })
)(Toggleable)

// Search Form
export const SearchForm = withRouter(
  connect(
    ({ words }, { history }) => {
      const handleSubmit = (query) => {  // Searching function
        const foundWord = findByTitle(words, query.toLowerCase());

        (foundWord) ?
          history.push(`/phrases/${foundWord.id}`) :
          history.push(`/phrases/${query}`)
      }

      return {
        handleSubmit,
        className: 'search-form',
        placeholder: 'Search word',
        button: 'Search'
      }
    }
  )(Form)
)