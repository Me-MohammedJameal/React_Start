import React from 'react'
import { use } from 'react'
import { useState , useEffect } from 'react'

const List = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('Updating Items')
    }, [getItems])

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default List