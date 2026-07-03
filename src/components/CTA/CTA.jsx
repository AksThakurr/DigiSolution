import "./CTA.css";
import CTAimg from "../../assets/images/CTA.jpg";
function CTA()
{
     return (
        <>
        <div className="cta-main">
            <div className="cta-box">
                <div className="cta-left">
                    <h1>See What’s New with KR Customizer Every Time</h1>
                    <p>Track your product journey with KR Customizer and get clear updates. Whether it’s a shiny new tool or a small improvement, nothing slips by unnoticed.</p>
                    <button>TRY FOR FREE</button>
                </div>
                <div className="cta-right">
                    <img src={CTAimg} alt="img" />
                </div>
            </div>
        </div>
        </>
     )
}
export default CTA;