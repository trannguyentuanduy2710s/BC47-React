import React from 'react'
import HeaderDemo from './HeaderDemo'

const DemoProps = () => {
  return (
    <div className='container mt-5'>
        <h1>Demo Props</h1>
        <img src="" alt="" />

        <HeaderDemo abc="abc" bg="red" name="DUY"/>
        <HeaderDemo bg="yellow"/>
        <HeaderDemo bg="green"/>
        <HeaderDemo bg="blue"/> 
    </div>
  )
}

export default DemoProps