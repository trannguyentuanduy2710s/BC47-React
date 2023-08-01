import React from 'react'
import BaiTapMoive from './BaiTapMoive'
import DemoState from '../State/DemoState'

const RenderWithMap = () => {
    const products = [
        {
            name: 'iPhone 8',
            price: 100000,
            color: 'black',
        },
        {
            name: 'iPhone X',
            price: 100000,
            color: 'pink',
        },
        {
            name: 'iPhone 13',
            price: 100000,
            color: 'blue',
        },
    ]
  return (
    <div className='container mt-5'>
        <h1>RenderWithMap</h1>
        <p>Danh sách sản phẩm</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                    </tr>
                </thead>

                <tbody>

                    {/* bắt buộc phải có return => UI
                        chỉ dc phép return về 1 thẻ duy nhất 
                        bắt buộc phải có thuộc tính key ở thẻ bao bọc ở ngoài củng và giá trị của key là duy nhất
                     */}
                    {
                        products.map((products,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
                                    <td>{products.color}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>


            <h2 >Bài tập Movie</h2>
            <BaiTapMoive></BaiTapMoive>
    </div>
  )
}

export default RenderWithMap