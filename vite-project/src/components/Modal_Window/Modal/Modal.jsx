import { useRef, useEffect, createRef } from 'react'
import './Modal.css'

export default function Modal({ children, open }) {

  const dialog = useRef()

  useEffect(()=> {
    if (open) {
      dialog.current.showModal()
    }
  
    else{
      dialog.current.close()
    }
  },[open])

  return (
  <>
  <dialog ref={dialog}>{children}</dialog>
  </>
  )
}

