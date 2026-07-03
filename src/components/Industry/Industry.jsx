import "./Industry.css";
import  IndustryImg from "../../assets/images/Industry.png"
function Industry()
{
    return (
        <>
            <div className="industry-conatiner">
              <div className="industry-box">
                     <h1>KR Customizer Help Every Industry Sell Smarter</h1>
                     <div className="industry-card">
                         <div className="industry-left">
                              <div className="left-content">
                                <h3>Fashion & Apparel</h3>
                                 <span style={{color:"#39FF84"}}>Style Made Personal</span>
                                 <p>Let customers design outfits their way with instant customization colors, patterns, and text that update live.</p>
                              </div>
                               <div className="left-content">
                                <h3>Jewelry & Accessories</h3>
                                <span>Every Piece Tells a Story</span>
                                 <p>Provide bespoke jewelry designs and personalized engraving to produce heartfelt, unique presents for every occasion.</p>
                              </div>
                              <div className="left-content">
                                <h3>E-Commerce & Retail</h3>
                                <span>From Ordinary to Extraordinary</span>
                                 <p>Boost sales by letting shoppers personalize gifts and products instantly making every purchase feel truly special.</p>
                              </div>
                              <div className="left-content">
                                <h3>Automotive</h3>
                                <span>Drive It Your Wa</span>
                                 <p>Encourage customers to customize interiors, finishes, and parts, giving them full control to build their own personalized vehicle.</p>
                              </div>
                         </div>
                      <div className="industry-right">
                             <img src={IndustryImg} alt="img" />
                      </div>
                     </div>
                  
              </div>
            </div>
        </>
    )
}
export default Industry;