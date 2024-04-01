import amazonlogo from '../../components/imgs/logo.png';
import location from '../../components/imgs/location.png';
import searchlogo from '../../components/imgs/search.png';
import header_bottom_image from '../../components/imgs/header_image.jpg';
import cart from '../../components/imgs/Cart.svg';
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
        </ul>
        <div className="header_bottom_img">
          <img src={header_bottom_image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
