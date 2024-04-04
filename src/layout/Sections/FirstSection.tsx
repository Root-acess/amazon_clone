import React from 'react';
import '../../css/globalCss.css';
import img1 from '../../components/imgs/ga1.jpg';
import img2 from '../../components/imgs/ga2.jpg';
import img3 from '../../components/imgs/ga3.jpg';
import img4 from '../../components/imgs/ga4.jpg';
import img5 from '../../components/imgs/sc1.jpg';
import img6 from '../../components/imgs/sc2.jpg';
import img7 from '../../components/imgs/sc3.jpg';
import img8 from '../../components/imgs/sc4.jpg';
import img9 from '../../components/imgs/amazon basics.jpg';
import img10 from "../../components/imgs/shop valentine's.jpg";
import img11 from '../../components/imgs/electronics.jpg';
import img12 from '../../components/imgs/find your deal.jpg';
import img13 from '../../components/imgs/easy return.jpg';
import img14 from '../../components/imgs/si1.jpg';
import img15 from '../../components/imgs/si2.jpg';
import img16 from '../../components/imgs/si3.jpg';
import img17 from '../../components/imgs/si4.jpg';
import img18 from '../../components/imgs/pinter1.jpg';
import img19 from '../../components/imgs/pc2.jpg';

function FirstSection() {
  return (
    <>
      <section className="sec-1">
        <div className="container">
          <div className="container-1">
            <div className="para">
              <p>You are on Amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
              <a href="https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_nxqtetlae_e&adgrpid=60571832564&hvpone=&hvptwo=&hvadid=486453138860&hvpos=&hvnetw=g&hvrand=12535176714638732243&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061830&hvtargid=kwd-296458789801&hydadcr=14452_2154371&gclid=Cj0KCQjwnvOaBhDTARIsAJf8eVNJ6D0_UEAgzp9_IEK8-AtbwjPY81k1murdrRDI1PsbLEmGdhyqKDMaArp9EALw_wcB">Click here to go to amazon.in</a>
            </div>
            <div className="product-comp">
              <div className="box">
                <h3>Gaming Accessories</h3>
                <div className="box-a">
                  <div>
                    <img src={img1} alt="" />
                    <span>Headsets</span>
                  </div>
                  <div>
                    <img src={img2} alt="" />
                    <span>Keyboards</span>
                  </div>
                  <div>
                    <img src={img3} alt="" />
                    <span>Computer mice</span>
                  </div>
                  <div>
                    <img src={img4} alt="" />
                    <span>Chairs</span>
                  </div>
                </div>
                <a href="#">See More</a>
              </div>
              <div className="box">
                <h3>Shop By Category</h3>
                <div className="box-a">
                  <div>
                    <img src={img5} alt="" />
                    <span>Laptop</span>
                  </div>
                  <div>
                    <img src={img6} alt="" />
                    <span>Video Games</span>
                  </div>
                  <div>
                    <img src={img7} alt="" />
                    <span>Baby</span>
                  </div>
                  <div>
                    <img src={img8} alt="" />
                    <span>Toy & Games</span>
                  </div>
                </div>
                <a href="#">Shop Now</a>
              </div>
              <div className="box box-c">
                <h3>Amazon Basics</h3>
                <div>
                  <img src={img9} alt="" />
                </div>
                <a href="#">See More</a>
              </div>
              <div className="box-b">
                <div className="best">
                  <h3>Sign up for the Best Experience</h3>
                  <button>Sign in securely</button>
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
              </div>
            </div>
            <div className="product-comp">
              <div className="box box-c">
                <h3>Shop Valentine's Day</h3>
                <div>
                  <img src={img11} alt="" />
                </div>
                <a href="#">See More</a>
              </div>
              <div className="box box-c">
                <h3>Electronics</h3>
                <div>
                  <img src={img12} alt="" />
                </div>
                <a href="#">See More</a>
              </div>
              <div className="box box-c">
                <h3>Find your ideal TV</h3>
                <div>
                  <img src={img13} alt="" />
                </div>
                <a href="#">See More</a>
              </div>
              <div className="box box-c">
                <h3>Easy Returns</h3>
                <div>
                  <img src={img14} alt="" />
                </div>
                <a href="#">See More</a>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="image-box">
              <div className="slide">
                <img src={img15} alt="" />
              </div>
              <div className="slide">
                <img src={img16} alt="" />
              </div>
              <div className="slide">
                <img src={img17} alt="" />
              </div>
              <div className="slide">
                <img src={img18} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <h3>Popular Products in Wireless Internationally</h3>
        <div className="slide-sec">
          <div className="l-btn"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="r-btn"><i className="fa-solid fa-chevron-right"></i></div>
          <ul className="product-slide">
            <li><img src={img2} alt="" /></li>
            <li><img src={img5} alt="" /></li>
            <li><img src={img11} alt="" /></li>
            <li><img src={img12} alt="" /></li>
           
          </ul>
        </div>
      </section>
      <section className="sec-2">
        <div className="slide-sec">
          <div className="l-btn btn-1b"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="r-btn btn-1a"><i className="fa-solid fa-chevron-right"></i></div>
          <h3>Popular Products in PC Internationally</h3>
          <ul className="product-slide product-slide-1">
            <li><img src={img16} alt="" /></li>
            <li><img src={img17} alt="" /></li>
            <li><img src={img18} alt="" /></li>
            <li><img src={img19} alt="" /></li>
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
            <li><img src={img5} alt="" /></li>
            <li><img src={img6} alt="" /></li>
            <li><img src={img7} alt="" /></li>
            <li><img src={img8} alt="" /></li>
            <li><img src={img9} alt="" /></li>
            <li><img src={img10} alt="" /></li>
            <li><img src={img11} alt="" /></li>
            <li><img src={img12} alt="" /></li>
          </ul>
        </div>
      </section>
       
    </>
  );
}

export default FirstSection;