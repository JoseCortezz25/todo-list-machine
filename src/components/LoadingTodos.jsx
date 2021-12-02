import React from 'react'
import { PulseLoader } from 'react-spinners'
import '../assets/styles/LoadingTodos.css'

const LoadingTodos = ({ loading }) => {
  return (
    //<div className="TodoItem">
    <div className="loading-todos">
      <p>We are loading all content, wait moment please...</p>
      <PulseLoader size={26} loading={loading} color="#feca57"/>
    </div>
    //</div>
  )

}

export { LoadingTodos }
