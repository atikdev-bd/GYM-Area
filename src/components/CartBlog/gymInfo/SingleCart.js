import React from 'react';
import './SingleCart.css'

const SingleCart = (props) => {
   const {img , name, id, time}= props.info
    return (
        <div className='single-cart'>
            <div className='cart-info'>
                <img src={img} alt="" />
                <p>kdjij</p>
                <p>dlfjlkd</p>
            </div>
            
        </div>
    );
};

export default SingleCart;