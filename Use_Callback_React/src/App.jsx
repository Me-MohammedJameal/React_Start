import React from 'react'
import List from './List'
import { useState } from 'react'
import { useCallback } from 'react'


const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number + 1, number + 2 , number + 3]
  }, [number])
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  return (
    <div style={themeStyles}>
      <input type="text"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
    
  )
}

export default App