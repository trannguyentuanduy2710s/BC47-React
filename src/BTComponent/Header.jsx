import React from "react";

const Header = () => {
  return (
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className=" title container px-lg-5">
          <a className="fs-3" href="#!">Start Boostrap</a>
          <div className="collapse navbar-collapse fs-3">
            <ul  class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
      </div>
    </div>
    
  );
};

export default Header;
