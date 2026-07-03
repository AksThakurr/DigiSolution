import "./Footer.css";
import KrcustomerLogo from "../Brands/krcustomerLogo";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
function Footer ()
{
    return(
    <>
        <hr/>
        <section className="footer">
            <div className="footer-container">
                <div className="footer-top">
                         <div className="footer-left">
                            <KrcustomerLogo/>
                              <p>8/F., CHINA HONG KONG TOWER, 8-12 HENNESSY ROAD, WAN CHAI, HONG KONG, HONG KONG, HONG KONG, 000000, Hong Kong</p>
                         </div>
                         <div className="footer-bt">
                            <h3>Company</h3>
                            <p>About Us 
                                <br />
                                Showcase Case
                                <br /> 
                                Studies Blog 
                                <br />Become a Partner</p>
                         </div>
                         <div className="footer-right">
                            <div className="footer-right-lt">
                                <h3>Customizer</h3>
                                <p>Bakery Fashion & Apparel Jewelry & Accessories Gifting & Occasion-Based</p>
                            </div>
                            <div className="footer-right-rh">
                                <h3>Contact Us</h3>
                                 <span>
                                    <img src={phone} alt="img" />
                                     <span>+91 904-530-1702</span>
                                 </span>
                                  <span>
                                    <img src={email} alt="img" /></span>
                                     <p>sales@krcustomizer.com</p>
                                     <p>support@krcustomizer.com</p>
                                 

                            </div>
                         </div>
                </div>
                <hr />
                  <div className="footer-bottom">
                    <h4>Privacy policy</h4>
                    <h4>© 2025 Customizer. All rights reserved.</h4>
                  </div>
            </div>
        </section>
    </>
    )
}
export default Footer;