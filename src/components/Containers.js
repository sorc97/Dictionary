import {connect} from 'react-redux'
import {
  addWord
} from '../redux/actionCreators'
import AddWordForm from './AddWordForm'

export const NewWord = connect(
  null,
  dispatch => ({
    onNewWord(eng, rus) {
      dispatch(addWord(eng, rus))
    }
  })
)(AddWordForm)
