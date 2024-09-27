import React from 'react'
import './Modal.css'

const Modal = ({score}) => {

    const restartFunc = () => {
        window.location = "/"
    }
  return (
    <div className='modal'>
        <div className='modal-title'>
           SCORE : {score}
        </div>
        <button id='btn' onClick={restartFunc} className='modal-btn'>
            RESTART
        </button>
    </div>
  )
}

export default Modal