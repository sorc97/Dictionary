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
  setContextSize,
  removePhrase,
  toggleAdding
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'
import ChangeLangForm from './ChangeLangForm'
import Words from './Words'
import ContextMenu from './ContextMenu'
import PhrasesModal from './PhrasesModal'
import Complexity from './Complexity'
import Toggler from './Toggler'
import { findById } from '../lib/array-helpers'
import Toggleable from './Toggleable'
import Header from './Header'

//Add Word Form
export const NewWord = connect(
  null,
  dispatch => ({
    onNewWord(eng, rus) {
      dispatch(addWord(eng, rus))
    }
  })
)(AddWordForm)

// SearchForm
export const HeaderContainer = connect(
  ({ words }) => ({
    words
  })
)(Header)

//Change Language Form
export const ChangeLang = connect(
  null,
  dispatch => ({
    onChangeLang(changeValue) {
      dispatch(changeLang(changeValue))
    }
  })
)(ChangeLangForm)

//Complexity 
export const ComplexityContainer = connect(
  ({ words }, { title }) => ({
    words,
    title
  })
)(Complexity)

//Words List
export const WordsList = connect(
  ({ contextMenu: { size } }) => ({
    contextMenuSize: size
  }),
  dispatch => ({
    onChange(id) {
      dispatch(changeWord(id))
    },
    onSetContext(left, top, id) {
      dispatch(setContext(left, top, id))
    }
  })
)(Words)

//Context Menu
export const ContextMenuContainer = connect(
  state => ({
    contextProps: state.contextMenu,
    contextMenuItems: [
      "Add to easy",
      "Add to medium",
      "Add to hard",
      "Phrases",
      "Remove",
    ]
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
    },
    onSetContextSize(height, width) {
      dispatch(setContextSize(height, width))
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
    close: "x",
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
    condition: !isAdding,
    className
  }) 
)(Toggleable)