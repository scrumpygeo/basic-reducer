import { React, useEffect } from 'react'

const Modal = ({ modalMessage, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className='modal'><p>{modalMessage}</p></div>
  )
}

export default Modal