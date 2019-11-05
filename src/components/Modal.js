import React from 'react'
import './stylesheets/Modal.css'

const Modal = ({children, onHideModal}) => {

  const handleOverlayClick = e => {
    let target = e.target;

    if(!target.classList.contains("modal-overlay")) return;

    onHideModal();
  }

  return(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div onClick={onHideModal} className="modal-content-close">
          &times;
        </div>
        {children}
      </div>
    </div>  
  )
}

export default Modal;