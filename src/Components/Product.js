import react from 'react';
import Shoes from './../Shoes.json';
import './Product.css';
import {Link} from 'react-router-dom';

function Product() {
    console.log(Shoes);
  return (
    <div >
        <h1>This is Product</h1>
        <div className='productContainer'>       
             {Object.keys(Shoes).map(keyName => {
              const shoe= Shoes[keyName];
            return(
                <Link key={keyName} className='link' 
                to={`/product/${keyName}`}>
                    <h2>{shoe.name}</h2>
                    <img src={shoe.img} height={150}/>
                </Link>
            )
        })}
        </div>

    </div>
  );
}

export default Product;
