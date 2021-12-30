import { useState, useEffect, useReducer } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))
  const {
    loading,
    error,
    item,
    sincronizedItem
  } = state

  // ACTIONS CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })


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
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 3000)
  }, [sincronizedItem])

  const saveItem = (newTodos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos))
      onSave(newTodos)
    } catch (error) {
      onError(error)
    }
  }

  const sincronizeItem = () => {
    onSincronize()
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  }

}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    sincronizedItem: true,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }

