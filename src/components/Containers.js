import {connect} from 'react-redux'
import {
  addWord,
  changeLang
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'
import Words from './Words'

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
    onChangeLang(id) {
      dispatch(changeLang(id))
    }
  })
)(Words)