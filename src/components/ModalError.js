import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

const ModalError = ({ 
  title = '', 
  history = {} 
}) =>
  <Modal onHideModal={() => history.replace('/')}>
    <h1>{title}</h1>
  </Modal>

ModalError.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object
}

export default ModalError
