import {connect} from 'react-redux'
import {
  addWord,
  changeWord,
  changeLang
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'
import Words from './Words'
import ChangeLangForm from './ChangeLangForm'

export const NewWord = connect(
  null,
  dispatch => ({
    onNewWord(eng, rus) {
      dispatch(addWord(eng, rus))
    }
  })
)(AddWordForm)

export const WordsContainer = connect(
  state => ({
    words: [...state]
  }),
  dispatch => ({
    onChange(id) {
      dispatch(changeWord(id))
    }
  })
)(Words)

export const ChangeLangContainer = connect(
  null,
  dispatch => ({
    onChangeLang(changeValue) {
      dispatch(changeLang(changeValue))
    }
  })
)(ChangeLangForm)