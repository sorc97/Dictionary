import {connect} from 'react-redux'
import {
  addWord,
  changeWord,
  changeLang,
  setContext,
  changeComplexity,
  removeWord,
  hideContext,
  addPhrase,
  setContextSize
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'
import ChangeLangForm from './ChangeLangForm'
import Complexitites from './Complexities'
import ContextMenu from './ContextMenu'
import PhrasesModal from './PhrasesModal'
import SearchForm from './SearchForm'
import {findById} from '../lib/array-helpers'

//Add Word Form
export const NewWord = connect(
  null,
  dispatch => ({
    onNewWord(eng, rus) {
      dispatch(addWord(eng, rus))
    }
  })
)(AddWordForm)

export const Search = connect(
  state => ({
    words: [...state.words]
  })
)(SearchForm)

//Change Language Form
export const ChangeLangContainer = connect(
  null,
  dispatch => ({
    onChangeLang(changeValue) {
      dispatch(changeLang(changeValue))
    }
  })
)(ChangeLangForm)

//Complexities and Words
export const ComplexititesContainer = connect(
  state => ({
    words: [...state.words],
    contextMenuSize: {...state.contextMenu.size}
  }),
  dispatch => ({
    onChange(id) {
      dispatch(changeWord(id))
    },
    onSetContext(left, top, id) {
      dispatch(setContext(left, top, id))
    }
  })
)(Complexitites)


//Context Menu
export const ContextMenuContainer = connect(
  state => ({
    contextProps: {...state.contextMenu},
    contextMenuItems: [
      "Add to easy",
      "Add to medium",
      "Add to hard",
      "Phrases",
      "Remove"
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

export const PhrasesContainer = connect(
  ({words}, {match}) => ({
    word: findById(words, match.params.id),
  }),
  dispatch => ({
    onNewPhrase(phrase, id) {
      dispatch(addPhrase(phrase, id))
    }
  })
)(PhrasesModal)