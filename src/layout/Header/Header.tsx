import React from 'react';
import amazonlogo from '../../components/imgs/logo.png';
import searchlogo from '../../components/imgs/search.png';
import header_bottom_image from '../../components/imgs/header_image.jpg'
import './header.scss';



const Header = () => {
  return (
    <>
      <div className="header">
        <img src={amazonlogo} alt="" />
        <div className="header_search">
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
      <div className="header_bottom">
        <ul>
          <li>All</li>
          <li>Amazon miniTv</li>
          <li>Sell</li>
          <li>Best Seller</li>
          <li>Mobiles</li>
          <li>Today's Deals</li>
          <li>CustomerService</li>
          <li>Prime</li>
          <li>Electronics</li>
          <li>NewReleases</li><div className="header_bottom_img">
        <img src={header_bottom_image} alt=""/>
      </div>
        </ul> 
        
      </div>
     
    </>
  )
}

export default Header;