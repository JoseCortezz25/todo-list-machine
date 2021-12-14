import React from 'react'
import { useWithStorageListener } from './useWithStorageListener'
import '../assets/styles/ChangeAlert.css'

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useWithStorageListener(sincronize)

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>It seems that you changed your TODOs in another browser tab</p>
          <p>Do you want to sync your TODOs?</p>
          <button
            onClick={() => toggleShow(false)}
            className="TodoForm-button TodoForm-button-add"
          >Yes!</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert }
