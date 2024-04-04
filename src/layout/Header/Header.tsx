import amazonlogo from '../../components/imgs/logo.png';
import location from '../../components/imgs/location.png';
import searchlogo from '../../components/imgs/search.png';
import header_bottom_image from '../../components/imgs/header_image.jpg';
import flag from '../../components/imgs/indian-flag.png';
import cart from '../../components/imgs/cartlogo.png';
import bar from '../../components/imgs/navbar.png'

import './header.scss';
import { Categories } from '../../Constants/Constants';

const Header = () => {
  return (
    <div>
      <div className="header-nav-top">
        <div className="logo border">
          <img src={amazonlogo} alt="Amazon logo" />
        </div>
        <div className="nav-location">
          <p className='nav-location-title'>Delivering to Baripada</p>
          <div className="nav-location-icon">
            <img src={location} alt="" className='nav-loc-img' />
            <p className='nav-location-footer'><strong>Baripada 757001</strong></p>
          </div>
        </div>

        <div className="nav-search">
          <select className='category'>
            <option value="search-alias=aps">All</option>
            {
              Categories.map((category, index) => {
                return (
                  <option key={category} value={category}>{category}</option>
                )
              })
            }
            {/* Other options */}
          </select>
          <input type="text" placeholder='search Amazon.in' className='nav-input' />
          <div className="search-icon">
            <img src={searchlogo} alt="" />
          </div>
        </div>

        <div className="nav-language">
          <div className="lang-select border">
            <img src={flag} alt="" />
            <select className='lanuage-select'>
              <option value="">EN </option>
              <option value="">HINDI </option>
              <option value="">ODIA </option>
              <option value="">MARATHI </option>
            </select>
          </div>
        </div>
        <div className="header_options">
          <p className="first">Hello,Signin</p>
          <p className="second">Account & List</p>
        </div>
        <div className="header_options">
          <p className="first">Return</p>
          <p className="second"> & Order</p>
        </div>
        <div className="header_cart">
         <img src={cart} alt=""  className='cartlogo'/>
          <p className="cart-second"> Cart</p>
        </div>
      </div>


  

      <div className="header_bottom">
        <ul>
        <img src={bar} alt="" className='bar_all'/>
          <li>All</li>
          <li>Amazon miniTv</li>
          <li>Sell</li>
          <li>Best Seller</li>
          <li>Mobiles</li>
          <li>Today's Deals</li>
          <li>CustomerService</li>
          <li>Prime   <span>▼</span></li>
          <li>Electronics</li>
          <li>New Release</li>
          <li>Home & kitchen</li>
          <li>Gift Idea</li>
          <li>Amazon pay</li>
          <li>Fashion</li>
          <li>Computer </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
