import "./Integration.css"
import IntegrationCard from "./IntegrationCard";
import Rectangle38 from "../../assets/images/Rectangle38.png";
import Rectangle39 from "../../assets/images/Rectangle39.png";
import Rectangle40 from "../../assets/images/Rectangle40.png";
import Rectangle41 from "../../assets/images/Rectangle41.png";
import Bgcommerce from "../../assets/images/topbrandimg1.png";
import shopifyLogo from "../../assets/images/shopify.png";
import FrameINt from "../../assets/images/FrameINt.png";
import woocommercelogo from "../../assets/images/woocommerce.png";


function Integration()
{
    return (
        <>
        <div className="Integration-div">
               <h1>Integration</h1>
               <p>Power your store with KR Customizer’s smooth integrations</p>
        </div>
          <div className="Integration-card">
                <IntegrationCard
                name="BigCommerce"
                logo={Bgcommerce}
                bg={Rectangle38}
                color="#20282C"/>
                <IntegrationCard
                 name="Shopify"
                logo={shopifyLogo}
                bg={Rectangle39}
                color="#5E8E3E"/>
                <IntegrationCard
                 name="Custom"
                logo={FrameINt}
                bg={Rectangle40}
                color="#3559C7"/>
                <IntegrationCard
                 name="WooCommerce"
                logo={woocommercelogo}
                bg={Rectangle41}
                color="#9B5C8F"/>
          </div>
        
        </>
    )
}
export default Integration;