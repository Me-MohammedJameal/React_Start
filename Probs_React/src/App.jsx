import React from 'react'
import User from './User'

function App() {
  const userdata = {
        name: "React Dev",
        age: 25,
        profession: "Frontend Developer"
    };
  return (
    <>
    <h1>Hello</h1>
    <User  {...userdata}/>
    </>
  )
}

export default App