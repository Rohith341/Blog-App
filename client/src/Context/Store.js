import {useState} from 'react'
import {CounterContext} from './CounterContext'

function Store({children}) {

  
  return (
    <CounterContext.Provider value={[]}>
        {children}
    </CounterContext.Provider>
  )
}

export default Store;