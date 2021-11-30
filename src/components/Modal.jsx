import React from 'react'
import ReactDOM  from 'react-dom'
import '../assets/styles/Modal.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal (
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }
