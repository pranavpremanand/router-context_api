import React from 'react'
import Two from './Two'

function One() {
  return (
    <div style={{backgroundColor:'grey',width:'75%'}}>
        <h1>Layer One</h1>
        <Two/>
    </div>
  )
}

export default One