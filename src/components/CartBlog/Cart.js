import React, { useEffect, useState } from 'react';
import Title from '../../header/Title';
import "./Cart.css"
import SingleCart from './gymInfo/SingleCart';

const Cart = () => {
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCarts(data)
        })
    },[])

    return (
        <div className='blog-area bg-slate-300'>
           <div className="cart-section">
           
           {
               carts.map(gymInfo =><SingleCart key={gymInfo.id} info = {gymInfo}></SingleCart>) 
            }
           </div>
           <div className="cart-summary bg-orange-200">
            <h1> this is summary here</h1>
           </div>
        </div>
    );
};

export default Cart;