import React from 'react'
import PropTypes from 'prop-types'
import { findByTitle } from '../lib/array-helpers'
import { withRouter } from 'react-router-dom'
import './stylesheets/SearchForm.css'

const SearchForm = ({ words = [], history }) => {
  let _serchQuery;

  const submit = e => {
    e.preventDefault();

    const query = _serchQuery.value.toLowerCase();
    const foundWord = findByTitle(words, query);

    (foundWord) ?
      history.push(`/phrases/${foundWord.id}`) :
      history.push(`/phrases/${query}`)

    _serchQuery.value = '';
    _serchQuery.focus();
  }

  return (
    <form 
      onSubmit={submit} 
      name='search' 
      className='search-form'
    >
      <input
        type='text'
        placeholder='Search word'
        ref={input => _serchQuery = input}
        className='search-text'
        required
      />
      <button className='search-button'>Search</button>
    </form>
  )
}

SearchForm.propTypes = {
  words: PropTypes.array,
  history: PropTypes.object
}

export default withRouter(SearchForm)