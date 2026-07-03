import "./krcustomerLogo.css";
import klogo from "../../assets/images/klogo.png";
import logoname from "../../assets/images/logoname.png";
function KrcustomerLogo()
{
    return (
    <>
         <div className="card-logo">
             <span> <img src={klogo} alt="img" /></span>
            <img src={logoname} alt="img" />
        </div>
    </>
    )
}
export default KrcustomerLogo;