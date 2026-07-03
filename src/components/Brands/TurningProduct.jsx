import "./TurningProduct.css";
import TurningProductIMG from "../../assets/images/TurningProduct.png";
function TurningProduct()
{
    return(
        <>
           <div className="TurningProduct-main">
            <div className="TurningProduct-content">
                <h1> <span>Turning Product Tours</span> into  <br />Sales Tools</h1>
                <img src={TurningProductIMG} alt="img" />
            </div>
           </div>
        </>
    )
}
export default TurningProduct;