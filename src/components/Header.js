import React from 'react'
import PropTypes from 'prop-types'
import {
  AddToggler,
  ChangeLang,
  ToggleableAdding,
  NewWord
} from './Containers'
import SearchForm from './SearchForm'
import WordsAmount from './WordsAmount'
import './stylesheets/Header.css'

const Header = ({ words = [] }) =>
  <header className='header'>
    <ToggleableAdding className="adding-wrapper">
      <NewWord />
    </ToggleableAdding>
    <AddToggler className="addingToggler" />
    <ChangeLang />
    <SearchForm words={words} />
    <WordsAmount
      amount={words.length}
      title="Words amount:"
    />
  </header>

Header.propTypes = {
  words: PropTypes.array
}

export default Header
