import { React, useEffect } from 'react'

const Modal = ({ modalMessage, closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal()
    }, 3000)
    // cleanup function
    return () => clearTimeout(timeout)
  })
  return (
    <div className='modal'><p>{modalMessage}</p></div>
  )
}

export default Modal