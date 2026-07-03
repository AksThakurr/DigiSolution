import "./brands.css"
import topbrandimg1 from"../../assets/images/topbrandimg1.png";
import topbrandimg2 from "../../assets/images/topbrandimg2.png";

import CardInfo from "./CradInfo";
import topdiv1 from "../../assets/images/topdiv1.png";
import topdiv2 from "../../assets/images/topdiv2.png";
import bottomdiv1 from "../../assets/images/bottomdiv1.png";
import bottomdiv2 from "../../assets/images/bottomdiv2.png";
import Group1 from "../../assets/images/Group1.png";
import Group2 from "../../assets/images/Group2.png";
import Group3 from "../../assets/images/Group3.png";
import Group4 from "../../assets/images/Group4.png";
import Frame from "../../assets/images/Frame.png";
import Integration from "./Integration";
import TurningProduct from "./TurningProduct";
import KrcustomerLogo from "./krcustomerLogo";
function Brands()
{
    return (
    <>
        <section>
            <div className="top-brand">
                <h2>Empowering Top Brands with Customization</h2>
                <div className="brand-img">
                    <img src={topbrandimg1} alt="img" className="bigcommerce" />
                    <img src={topbrandimg2} alt="img" className="flipkart" />
                </div>
            </div>
            <div className="customizing-div">
                   <div className="customizing-content">
                     <h2>Start Customizing in <br />
                     <span>Just Minutes</span></h2>
                     <p>Quick setup, no coding needed!</p>
                   </div>
                   <div className="customizing-Allcards">
                     
                       <div className="card-content">
                             <div className="card">
                                <KrcustomerLogo/>
                                   {/* <div className="card-logo">
                                       <span> <img src={k} alt="img" /></span>
                                     <img src={logoname} alt="img" />
                                   </div> */}
                                   <hr />
                                   <div className="card-data">
                                    <p>Pricing</p>
                                     <h3>Free</h3>
                                   </div>
                                    <div className="card-data">
                                    <p>Rating</p>
                                     <h3 className="rating">★★★★★</h3>
                                   </div>
                                    <div className="card-data">
                                    <p>Developer</p>
                                     <h3 className="card-data-name">Krcustomizer</h3>
                                   </div>

                                   <button>INSTALL</button>

                             </div>
                             <CardInfo num="1"
                                 name="Install KR Customizer"
                                 para="Add the customization tool to your store in a few clicks."/>
                             
                       </div>
                       {/* 2nd card */}
                               
                       <div className="card-content">
                             <div className="card">
                                <div className="topdiv">
                                    <div className="topdiv1">
                                        <img src={topdiv1} alt="img"  className="cardimg"/>
                                        <p>Men Solid Polo Neck Polyester Pink T-Shirt</p>
                                    </div>
                                    <div className="topdiv2">
                                         <img src={topdiv2} alt="img"  className="cardimg"/>
                                        <p>Unisex Solid Round Neck Polyester Beige ..</p>
                                    </div>
                                </div>
                                <div className="bottomdiv">
                                    <div className="bottomdiv1">
                                           <img src={bottomdiv1} alt="img"  className="cardimg"/>
                                        <p>Sizzling Solitaire Adjustable For Women ..</p>
                                    </div>
                                     <div className="bottomdiv2">
                                         <img src={bottomdiv2} alt="img"  className="cardimg"/>
                                        <p>Sneakers For Men  (White, Black ..)</p>
                                    </div>
                                </div>
                             </div>
                             <CardInfo num="2"
                             color="#467ABF"
                                 name="Pick Your Product"
                                 para="Pick a POD item or make your own mock-up to customize."/>
                             
                       </div>
                       {/* 3 */}
                       <div className="card-content">
                             <div className="card size">
                                  <span>Kr Customizer Design Library</span>
                                  <div className="topdiv3">
                                       <div className="topimg1">
                                          <img src={Group1}alt="img" />
                                            <p>Patterns</p>
                                       </div>
                                        <div className="topimg2">
                                          <img src={Group2} alt="img" />
                                            <p>Colors</p>
                                       </div>
                                  </div>
                                   <div className="bottomdiv3">
                                           <div className="bottomimg1" >
                                            <img src={Group3}alt="img" />
                                            <p>Shapes</p>
                                           </div>
                                            <div className="bottomimg2" >
                                            <img src={Group4} alt="img" />
                                            <p>Fonts</p>
                                           </div>
                                  </div>

                             </div>
                             <CardInfo num="3"
                                  color="#AB46BF"
                                 name="Add Personalization"
                                 para="Explore our design library or craft one-of-a-kind custom options for your shoppers."/>
                             
                       </div>
                       {/* 4 */}
                       <div className="card-content">
                             <div className="card">
                                <div className="div4">
                                <div className="leftdiv">
                                    <img src={bottomdiv1} alt="" />
                                    <p>Sizzling Solitaire Adjustable For Women</p>
                                </div>
                                  
                                <div className="rightdiv">
                                    <img src={Frame} alt="img" />
                                </div>
                                </div>

                                   <button>CHECKOUT</button>

                             </div>
                             <CardInfo num="4"
                                   color="#46ADBF"
                                 name="Launch and Sell"
                                 para="Publish your customized product and increase your sales."/>
                             
                       </div>
                   </div>
            </div>
            {/* Integration */}
            <div>
                  <Integration/>
            </div>
            <div>
                  <TurningProduct/>
            </div>
        </section>
    </>
    )
}
export default Brands;