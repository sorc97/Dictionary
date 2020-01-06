import React from 'react'
import PropTypes from 'prop-types'

const Toggleable = ({ 
  condition = false,
  className = "",
  children,
}) => 
  <div 
    hidden={condition}
    className={className}
  >
    {children}
  </div>  

Toggleable.propTypes = {
  condition: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Toggleable