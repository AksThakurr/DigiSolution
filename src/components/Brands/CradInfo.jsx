import "./CradInfo.css";
function CardInfo({num,name,para,color})
{
    return (
        <>
         <div className="card-info">
                  <h1 style={{color:color}}>{num}</h1>
                   <div className="card-info-data">
                    <h2>{name}</h2>
                    <p>{para}</p>
                     </div>
               </div> 
        </>
    )
}
export default CardInfo;