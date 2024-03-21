import React from 'react';
import amazonlogo from '../../components/imgs/Amazon_logo.png';
import searchlogo from '../../components/imgs/search.png';
import './header.scss';



const Header = () => {
  return (
    <>
      <div className="header">
<img src="https://www.amazon.in/ref=nav_logo" alt="" />        <div className="header_search">
          <input type="text" />
          <img src={searchlogo} alt="" />

        </div>
        <div className="header_nav">
          <div className="header_options">
            <span className="header_option1">Hello user</span>
            <span className="header_option1">Sign In</span>
          </div>
          <div className="header_options">
            <span className="header_option1">Return</span>
            <span className="header_option1">&Order</span>
          </div>
          <div className="header_options">
            <span className="header_option1">Your</span>
            <span className="header_option1">prime</span>
          </div>


        </div>
      </div>
    </>
  )
}

export default Header;