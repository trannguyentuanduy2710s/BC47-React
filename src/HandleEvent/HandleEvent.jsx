import React from 'react'

const HandleEvent = () => {
    const logger = () => {
        alert('Helloword')
    }

    const showMessage =(message) => {
        alert(message)
    }

    // Mọi event trong react đều trả về 1 tham số event 
  return (
    <div className='container'>
        <h1>HandleEvent2</h1>

        {/* Hàm k có tham số */}
        <button className='btn btn-outline-success mt-3' onClick = {logger} >Logger</button>

        {/* Hàm có tham số  */}

        <button className='btn btn-outline-info mt-3' onClick = {() => {
            showMessage('Hello word')
        }}>Show Message</button>

        <button className='btn btn-outline-danger ms-3 mt-3' onClick={(event) => {
            console.log(event.currentTarget);  
            // alert('Hello duy')
        }}>Show Message 1</button>

    </div>
  )
}

export default HandleEvent