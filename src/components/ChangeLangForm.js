import React from 'react'
import './stylesheets/ChangeLangForm.css'

const ChangeLangForm = ({onChangeLang = f => f}) => 
  <div className = 'changeLang-wrapper'>
    <button 
      className = 'changeLang-button' 
      onClick={() => onChangeLang('eng')}
    >
      English words
    </button>
    
    <button 
      className = 'changeLang-button' 
      onClick={() => onChangeLang('rus')}
    >
      Russian words
    </button>
  </div>

export default ChangeLangForm