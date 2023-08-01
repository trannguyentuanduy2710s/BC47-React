import React from 'react'

const RenderWithCondition = () => {
    const isLogin = false
    const isShowMessage = false
    const renderLogin = () => {
        if(isLogin){
            return <div><p>Hello Duy</p> <button className='btn btn-danger'>Đang xuất</button></div>
        }

        return <button className='btn btn-success'>Đăng nhập</button>
    }
  return (
    <div className='container'>
        <h1>RenderWithCondition</h1>
        {/* {
            isLogin? <div><p>Hello Duy</p> <button className='btn btn-danger'>Đang xuất</button></div> : <button className='btn btn-success'>Đăng nhập</button>
        } */}

        {renderLogin()}


        {
            isShowMessage && <p className='fs-3 mt-5'>HelloBC47</p>
        }
    </div>
  )
}

export default RenderWithCondition



// state
// props
// redux
// redux-toolkit
// react-router



// xử lý form giao diện (react-hook-form)
// lifecycle 
// useEffect, useMemo, useRef, useCallback, useID, useTransition, memmo
// react-query
// tyscript