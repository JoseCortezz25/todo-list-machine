import { useState, useEffect } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)
  const [sincronizeItem, setSincronizeItem] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
        setSincronizeItem(true)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [sincronizeItem])

  const saveItem = (newTodos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos))
      setItem(newTodos)
    } catch (error) {
      setError(error)
    }
  }

  const sincronize = () => {
    setLoading(true)
    setSincronizeItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize
  }
}

export { useLocalStorage }
