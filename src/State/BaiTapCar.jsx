import React, { useState } from 'react'

const BaiTapCar = () => {
    const [imgSrc, setImgSrc] = useState('./images/car/red-car.jpg')

    const handleImgSrc = (name) => {
        setImgSrc(`./images/car/${name}-car.jpg`)
    }

    // currying function
    const handleImg = (name) => () =>{
        setImgSrc(`./images/car/${name}-car.jpg`)
    }

  return (
    <div className='mt-5 '>
        <h2>Bài tập car</h2>
        <div className="row">

            <div className="col-8">
                <img className='img-fluid' src = {imgSrc} alt="" />
            </div>

            <div className="col-4 d-flex flex-column" style={{gap: 20}}>
                <button className='btn btn-dark' onClick={handleImg('black')}>Black</button>
                <button className='btn btn-danger'onClick={() => {
                    handleImgSrc('red')
                }}  >Red</button>
                <button className='btn btn-secondary' onClick={() => {
                    handleImgSrc('silver')
                }} >Silver</button>
                <button className='btn' style={{background: 'grey'}} onClick={() => {
                    handleImgSrc('steel')
                }} >Steel</button>
            </div>

        </div>
    </div>
  )
}

export default BaiTapCar