import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/Toggler.css'

const Toggler = ({
  condition,
  open, 
  close,
  toggleHandler,
  className
}) => 
  <button
    onClick={toggleHandler}
    className={className}
  >
    {
      condition? close: open
    }
  </button>

// Prop Types 
Toggler.propTypes = {
  condition: PropTypes.bool,
  open: PropTypes.string,
  close: PropTypes.string,
  className: PropTypes.string,
  toggleAdding: PropTypes.func
}

Toggler.defaultProps = {
  condition: false,
  open: "+",
  close: "X",
  className: "",
  toggleAdding: () => {}
}

export default Toggler