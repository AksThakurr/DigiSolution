import "./IntegrationCard.css";
import topbrandimg1 from "../../assets/images/topbrandimg1.png";

function IntegrationCard({name,logo,bg,color})
{
    return (
        <>
        <div className="inte-card" style={{backgroundImage:`url(${bg})`}}>
            <h1 style={{color:color}}>{name}</h1>
             <img src={logo} alt="img" />
        </div>
        </>
    )
}
export default IntegrationCard;