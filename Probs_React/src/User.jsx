import React from 'react'

function User(props) {
    
  return (
    <>
    <h2>IM REACT DEV</h2>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Profession: {props.profession}</p>
    </>
  )
}

export default User