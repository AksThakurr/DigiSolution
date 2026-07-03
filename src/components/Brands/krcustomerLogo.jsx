import "./krcustomerLogo.css";
import k from "../../assets/images/K.png";
import logoname from "../../assets/images/logoname.png";
function KrcustomerLogo()
{
    return (
    <>
         <div className="card-logo">
             <span> <img src={k} alt="img" /></span>
            <img src={logoname} alt="img" />
        </div>
    </>
    )
}
export default KrcustomerLogo;