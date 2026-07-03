import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/features";
import Brands from "../components/Brands/brands.";
import Industry from "../components/Industry/Industry";
import CTA from "../components/CTA/CTA";
import Footer from "../components/footer/Footer";
import NeedHelp from "../components/NeedHelp/NeedHelp";
import ClientShaying from "../components/ClientShaying/ClientShaying";
function Home()
{
    return(
        <>
           <Navbar/>
           <Hero/>
           <Features/>
           <Brands/>
           <Industry/>
            <ClientShaying/>
            <NeedHelp/>
           <CTA/>
           <Footer/>
        </>
    )
}
export default Home;