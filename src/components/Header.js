import React from 'react'
import PropTypes from 'prop-types'
import {
  AddToggler,
  ChangeLang,
  ToggleableAdding,
  NewWord,
  SearchForm
} from './Containers'
import WordsAmount from './WordsAmount'
import './stylesheets/Header.css'
import './stylesheets/SearchForm.css'

const Header = ({ wordsSum = 0 }) =>
  <header className='header'>
    <ToggleableAdding className="adding-wrapper">
      <NewWord />
    </ToggleableAdding>
    <AddToggler className="adding-toggler" />
    <ChangeLang />
    <SearchForm />
    <WordsAmount
      amount={wordsSum}
      title="Words amount:"
    />
  </header>

Header.propTypes = {
  words: PropTypes.array
}

export default Header