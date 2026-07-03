import "./features.css";
import features from "../../assets/images/features.png";
import vector from "../../assets/images/Vector.png";
import IMG1 from "../../assets/images/IMG1.jpg";
import IMG2 from "../../assets/images/item2.png";
import IMG3 from "../../assets/images/item3.jpg";
function Features()
{
    return(
        <>
           <section>
                <div className="features-section">
                    <div className="img-div">
                          <img src={features} alt="img" />
                    </div>
                  
                    <div className="features-content">
                        <p>FEATURES</p>
                        <h1>
                            <span>Turn Every Click </span>
                            Into a <br /> Custom Purchase
                            </h1>
                    </div>
                </div>
                <div className="features-item">
                    <div className="item-left">
                     <div className="icon-group">
                        <img src={vector} alt="" />
                     <span>TURN CREATIVITY INTO SALES</span>
                     </div>
                       <div className="item-heading">
                       <h1><span>Custom products</span>
                        that <br />customers can't resist</h1> 
                       <p>Create unique personalized gifts with our product customizer. <br /> Boost sales and delight customers with products they'll love.</p>
                       </div>
                        <div className="item-btn">
                            <button>REQUEST A DEMO</button>
                        </div>
                    </div>
                    <div className="item-right">
                        <img src={IMG1} alt="img" />
                    </div>

                </div>
                <br />
                {/* item 2 */}
                <div className="features-item">
                    <div className="item-right">
                        <img src={IMG2} alt="img" />
                    </div>
                    <div className="item-left">
                     <div className="icon-group">
                        <img src={vector} alt="" />
                     <span>MAKE EVERY PRODUCT ONE OF A KIND</span>
                     </div>
                       <div className="item-heading">
                       <h1><span>Transform Shopping </span>
                       into an <br />Experience with Real-Time Personalization
                     </h1> 
                       <p>Delight shoppers with real-time previews and easy customization  tools. <br /> Build trust and excitement through. a seamless buying experience.</p>
                       </div>
                        <div className="item-btn">
                            <button>REQUEST A DEMO</button>
                        </div>
                    </div>
                </div>
                <br />
                {/* item 3 */}
                 <div className="features-item">
                    <div className="item-left">
                     <div className="icon-group">
                        <img src={vector} alt="" />
                     <span>WORK SMARTER. GROW FASTER</span>
                     </div>
                       <div className="item-heading">
                       <h1><span>Smart Automation</span>
                        for <br /> Smarter Growth</h1> 
                       <p>KR Customizer automates your workflow from print-ready files to seamless POD integration. Design once, sell everywhere, and grow with ease.</p>
                       </div>
                        <div className="item-btn">
                            <button>REQUEST A DEMO</button>
                        </div>
                    </div>
                    <div className="item-right">
                        <img src={IMG3} alt="img" />
                    </div>

                </div>
                
           </section>
        
        </> 
    )
}
export default Features;