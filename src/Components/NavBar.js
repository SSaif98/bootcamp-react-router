import react from 'react';  
import {Link} from 'react-router-dom';
import './Product.css';

function NavBar() {
  return (
    <div className='mainNav'>
        <Link to="/" className='navBar'>Home</Link>
        <Link to="/about" className='navBar'>About</Link>
        <Link to="/product" className='navBar'>Product</Link>
       
    </div>
  );
}

export default NavBar;  
