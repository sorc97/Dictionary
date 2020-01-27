import React from 'react'
import './stylesheets/PhrasesHeader.css'

const PhrasesHeader = ({ word, translation }) => 
  <h1 className="phrases-header">
    <span>{word}</span>
    <br />
    <span>{translation}</span>
  </h1>

export default PhrasesHeader