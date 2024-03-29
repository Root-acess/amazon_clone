import amazonlogo from '../../components/imgs/logo.png';
import location from '../../components/imgs/location.png';
import searchlogo from '../../components/imgs/search.png';
import header_bottom_image from '../../components/imgs/header_image.jpg';
import flag from '../../components/imgs/indian-flag.png';
import cart from '../../components/imgs/cartlogo.png';
import bar from '../../components/imgs/navbar.png'

import './header.scss';

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
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias-mobile-apps">Apps & Games</option>
            <option value="search-alias=audible">Audible Audiobooks</option>
            <option value="search-alias=baby">Baby</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=automotive">Car & Motorbike</option>
            <option value="search-alias=apparel">Clothing & Accessories</option>
            <option value="search-alias=collectibles">Collectibles</option>
            <option value="search-alias=computers">Computers & Accessories</option>
            <option value="search-alias=todays-deals">Deals</option>
            <option value="search-alias-electronics">Electronics</option>
            <option value="search-alias=furniture">Furniture</option>
            <option value="search-alias=lawngarden">Garden & Outdoors</option>
            <option value="search-alias-gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">Grocery & Gourmet Foods</option>
            <option value="search-alias=hpc">Health & Personal Care</option>
            <option value="search-alias-industrial">Industrial & Scientific</option>
            <option value="search-alias-jewelry">Jewellery</option>
            <option value="search-alias-digital-text">Kindle Store</option>
            <option value="search-alias=luggage">Luggage & Bags</option>
            <option value="search-alias-luxury-beauty">Luxury Beauty</option>
            <option value="search-alias=dvd">Movies & TV Shows</option>
            <option value="search-alias-digital-music">MP3 Music</option>
            <option value="search-alias=popular">Music</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">Office Products</option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias-instant-video" >Prime Video</option>
            <option value="search-alias=shoes">Shoes & Handbags</option>
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
