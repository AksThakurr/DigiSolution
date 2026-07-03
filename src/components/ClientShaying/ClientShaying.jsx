import "./ClientShaying.css";
import csimg from "../../assets/images/cs-img.png";
import csimg1 from "../../assets/images/cs-img1.png";
import csimg2 from "../../assets/images/cs-img2.png";
function ClientShaying()
{
    return (
        <>
           <section className="cs-container">
            <div   className="cs-content">
                <h2>What KR Customizer’s <br /><span>Clients Are Saying</span></h2>
                 <div className="cs-allcard">
                    <div className="cs-card">
                         <span>★★★★★</span>
                         <p>“Customizing products used to be such a headache for us. With KR Customizer, our customers can design what they want and see it instantly before buying. It’s made shopping smoother, our sales are up, returns are down, and we finally have time to focus on growing the business. Honestly, I don’t know how we managed without it.”</p>
                         <img src={csimg} alt="img" className="cs-img" />
                    </div>
                    <div className="cs-card">
                        <span>★★★★★</span>
                         <p>“KR Customizer’s tool works for all of the things we sell, like mugs, t-shirts, and gifts. Customers are more likely to buy when they can see their thoughts right away. It made our store feel more engaging, got more people involved, and turned casual shoppers into passionate customers who keep coming back for more.”</p>
                         <img src={csimg1} alt="img" className="cs-img" />
                    </div>
                    <div className="cs-card">
                        <span>★★★★★</span>
                         <p>“We didn't know how to start making custom sports gear, but we wanted to. It was really simple to set up this tool, and it works great with our Shopify shop. Lots of people have bought it before and will buy it again. It has completely changed how people see our business.”
                         </p>
                         <img src={csimg2} alt="img" className="cs-img" />
                    </div>
                 </div>
            </div>
           </section>
        </>
    )
}
 export default ClientShaying;
