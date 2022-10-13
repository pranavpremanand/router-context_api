import React, {useContext} from 'react'
import { AppContext } from '../AppContext'

function Two() {
const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'lightblue',width:'50%'}}>
        <h1>Layer Two {data}</h1>
    </div>
  )
}

export default Two