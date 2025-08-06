import React, { use } from 'react'
import '../css/Product.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Product({ product }) {
    const { id, title, price, description, image } = product;

    const navigate = useNavigate();

  return (
    <div className="card">
      <img className="product-image" src={image} alt={""} />
        <div>
            <h2 style={{textAlign: 'center', fontSize: '0.9rem', height: '50px'}}>{title}</h2>
            <p style={{textAlign: 'center'}}>Price: ${price}</p>
        </div>
        <div className='flex-row'>
            <button  className='detail-button' onClick={() => navigate(`/product-details/${id}`)}>Detayına Git</button>
        </div>
      
      
      
    </div>
  )
}

export default Product