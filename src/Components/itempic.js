import React from 'react';
import axios from 'axios';

const ItemPic = ({ itempi, email }) => {
  const addToCart = async () => {
    try {
      const response = await axios.post('http://localhost:8000/cart', {
        email,
        ...itempi
      });

      console.log('Product added to cart:', response.data);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <figure className='figure'>
      <img className='img' src={itempi.productImagelink} alt={itempi.productName} />
      <figcaption className='figcaption'>
        <p className='p'>{itempi.productName}</p>
        <p className='p'>₹‎{itempi.rate}</p>
      </figcaption>
      <button className='button' onClick={addToCart}>Add to cart</button>
    </figure>
  );
};

export default ItemPic;
