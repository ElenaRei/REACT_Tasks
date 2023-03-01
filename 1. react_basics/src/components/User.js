import React from 'react'

export default function User({ id, firstname, lastname, age}) {
  return (
    <div>
    <p>ID: { id }</p>  
    <p>Name: { firstname }</p>
    <p>Lastname: { lastname }</p>
    <p>Age: { age }</p>
    </div>
  )
}

