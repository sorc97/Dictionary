import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './stylesheets/Toggleable.css'

const Toggleable = ({
  condition = false,
  className = "",
  children,
}) =>
  <TransitionGroup className={className}>
    {
      condition && (
        <CSSTransition
          timeout={500}
          classNames='slide-down'
        >
          {children}
        </CSSTransition>
      )
    }
  </TransitionGroup>


Toggleable.propTypes = {
  condition: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Toggleable