import React from 'react'
import {findByTitle} from '../lib/array-helpers'
import {withRouter} from 'react-router-dom'
import './stylesheets/SearchForm.css'

const SearchForm = ({words, history}) => {
  let _serchQuery;

  const submit = e => {
    e.preventDefault();

    const query = _serchQuery.value.toLowerCase();
    const foundWord = findByTitle(words, query);

    (foundWord) ? 
      history.push(`/phrases/${foundWord.id}`) : 
      history.push(`/phrases/error`)

    _serchQuery.value = '';
  }

  return (
    <form onSubmit={submit} name='search' className='search-form'>
      <input 
        type='text' 
        placeholder='Search word' 
        ref={input => _serchQuery = input}
        className='search-text'
      />
      <button className='search-button'>Search</button>
    </form>
  )
  
}

export default withRouter(SearchForm)