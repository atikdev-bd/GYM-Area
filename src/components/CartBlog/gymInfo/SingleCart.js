import React from "react";
import "./SingleCart.css";

const SingleCart = (props) => {
  const { img, name, id, time } = props.info;
  return (
    <div className="single-cart rounded-md  bg-slate-400">
      <div className="cart-info">
        <img className="rounded-xl p-2" src={img} alt="" />
        <div className="mt-2">
        <p className="px-4 mb-2">{name}</p>
        <p className="px-4 "> Time required : {time}</p>
        </div>
        <div className="text-center mt-12">
          <button className="btn s text-xl px-4 py-2 bg-slate-300 hover:bg-slate-500 rounded">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
