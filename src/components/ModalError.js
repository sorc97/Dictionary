import React from 'react'
import Modal from './Modal'

const ModalError = ({title, history}) =>
  <Modal onHideModal={() => history.replace('/')}>
    <h1>{title}</h1>
  </Modal>

export default ModalError
