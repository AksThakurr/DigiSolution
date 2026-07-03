import './Navbar.css';
import logo from "../../assets/images/logo.jpeg"
import {  FaBars} from "react-icons/fa";
function Navbar()
{
  return(
    <>
       <header className='navbar-container'>
           <span className='menu-icon'>{  <FaBars />}</span>
          <div className='navbar-logo'>
                <img src={logo} alt="img" />
                 <h4 className='nav-h1'>krcustomizer</h4>
             </div>
            <ul className='nav-links'>
                <li><a href="#">Showcase <span>&#9662;</span> </a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className='nav-btn'>Book A Demo</button>
       </header>
    </>
  )
}
export default Navbar;