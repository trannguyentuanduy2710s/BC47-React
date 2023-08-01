import React from 'react'

const HeaderDemo = (props) => {
  console.log("props: ", props);  
  // 1. props thay đổi => component render lại
  // 2. kh thể thay đổi giá trị của props
  return (
    <div>
        <h1 className='text-center text-white p-3 fs-3 ' style={{
          background: props.bg,
        }}>HEADER</h1>
          <p>name: {props.name}</p>                                                     
    </div>
  )
}

export default HeaderDemo