import React from 'react'
import './style.css' // css ăn toàn bộ component trong dự án 
import ten from './style.module.css'
import './style.scss'
import duy from './style.module.scss'

const StyleComponent = () => {
  return (
    <div className='container mt-5 StyleComponent'>
        <h1 className='title'>StyleCss</h1>
        {/* <p className={ten.subTitle}>Sub title</p> */}
        
        <p className={`${ten.subTitle} ${ten.description} ${ten['sub-title']}`}>Sub title</p>
       
        <p style={{fontSize: '20px', fontWeight: 600, color: 'red'}}>Lorem ipsum dolor sit amet.</p>

        <p className='style_title'>Hello</p>
        </div>
  )
}

export default StyleComponent