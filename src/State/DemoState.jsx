import React, { useState } from "react";
import BaiTapCar from "./BaiTapCar";

const DemoState = () => {

  // 1. Mọi thứ cần thay đổi trên UI => dựa vào state
  // 2. Để tạo 1 state trong function component => gọi hàm (hooks) useState
  // 3. useState trả về 1 mảng gồm 2 phần tử: 
  //                                        + phần tử thứ 0: state  
  //                                        + phần tử thứ 1: 1 hàm setState => thay đổi giá trị của state 
  // 4. khi state được thay đổi = hàm setState => component sẽ dc render lại với giá trị state mới => UI dc update
  // 5. Tham số truyền vào khi gọi hooks useState => gọi là giá trị mặc định của state khi component được render lần đầu tiên
  // 6. Chỉ nên thay đổi giá trị của state thông qua hàm setState
  // 7. Trong 1 component kh giới hạn số lượng state dc tạo => hooks useState
  // 8. Tham số của useState có thể là 1 func => giá trị trả về của func này là giá trị mặc định của state
  //                                          => func này chỉ dc gọi duy nhất 1 lần khi component render lần đầu tiên
    
  let [isLogin, setIslogin] = useState(true)
  


  const handleLogin = (login) => {
    isLogin = login
    // console.log("isLogin: ", isLogin);
    setIslogin(login)
  }
 
  const [number, setNumber] = useState(100)
  const [fontSize, setFontSize] = useState(20)

  return (
    <div className="container mt-5">
      <h1>DemoState</h1>

      {isLogin ? (
        <div className="fs-3 mb-5">
          Hello Duy <button className="btn btn-danger ms-4 " onClick={() => {
            handleLogin(false)
          }}>Đăng xuất</button>
        </div>
      ) : (
        <button className="btn btn-success" onClick={() => {
          handleLogin(true)
        }}>Đăng Nhập</button>
      )}


        <h2>Example</h2>
        <p className="fs-4 mt-4 ">Number: {number}</p>
        <div className="btn btn-outline-success" onClick={() =>{
          setNumber(number + 2)
        }}> + Number</div>
        <div className="btn btn-outline-danger ms-5" onClick={() =>{
          setNumber(number - 2)
        }}> - Number</div>
        
        <p className="mt-5" style={{fontSize}}>Hello word</p>
        <div className="mt-5">
          <button className="btn btn-success" onClick={() => {
            setFontSize(fontSize + 2)
          }}>+ font size</button>
          <button className="btn btn-danger" onClick={() => {
            setFontSize(fontSize - 2)
          }}>- font size</button>
        </div>

          {/*Bài tập car  */}
        <BaiTapCar></BaiTapCar>
    </div>
  );
};

export default DemoState;
