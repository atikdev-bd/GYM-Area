import React from 'react';
import './SingleCart.css'

const SingleCart = (props) => {
   const {img , name, id, time}= props.info
    return (
        <div className='single-cart rounded-md bg-slate-500'>
            <div className='cart-info'>
                <img className='rounded-xl p-2' src={img} alt="" />
                <p>{name}</p>
                <p> Time required : {time}</p>
                <div className="text-center">
                <button className='btn text-xl bg-green-600 px-4 py-2 rounded'>Add to list</button>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCart;