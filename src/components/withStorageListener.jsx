import React from 'react'

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (event) => {
      if (event.key === 'TODOS_V1') {
        setStorageChange(true)
        console.log('storage changed')
      }
    })

    const toggleShow = () => {
      props.sincronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent 
        show={storageChange} 
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener }
