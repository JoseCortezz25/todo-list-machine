import React from 'react'
import { withStorageListener } from './withStorageListener'

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Were there any changes?</p>
        <button onClick={() => toggleShow(false)}>Reload content</button>
      </div>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
