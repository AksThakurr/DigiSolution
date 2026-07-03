import hero from "../../assets/images/hero-section.png";
import "./Hero.css";
function Hero()
{
    return(
        <>
          <section>
            <div className="hero-container">
                <div className="hero-left">
                    <p className="hero-subtitle">BRING PRODUCTS TO LIFE WITH KR CUSTOMIZER</p>
                    <h1 className="hero-title">Transform <span>Personalization</span> <br /> Experience with Next-Level Product <span>Customization</span></h1>
                     <div className="hero-features">
                         <p><span>✔</span> Offer unique</p>
                         <p><span>✔</span> Customized products with ease</p>
                         <p><span>✔</span> Streamline custom orders</p>
                    </div>
                     <div className="hero-buttons">
                        <button className="primary-btn">REQUEST A DEMO</button>
                     <button className="secondary-btn">TRY FOR FREE</button>
                  </div>

                </div>
                <div className="hero-right">
                    <img src={hero} alt="img" />
                </div>
            </div>
          </section>
        </>
    )
}
export default Hero;