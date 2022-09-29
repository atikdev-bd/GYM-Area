import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Cart.css";
import SingleCart from "./gymInfo/SingleCart";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState([]);


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, []);

  const addToCart = (info) => {
    const newTime = time + parseInt(info.time);
    setTime(newTime);
  };
  function breakTime(value) {
    localStorage.setItem("time", JSON.stringify(value));
    const local = localStorage.getItem("time");
    setTime2(parseInt(local));
  }

  function diffToast() {
    toast("Activity Completed!");
  }
  return (
    <div className="blog-area bg-slate-300">
      <div className="cart-section grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {carts.map((gymInfo) => (
          <SingleCart
            key={gymInfo.id}
            info={gymInfo}
            addToCart={addToCart}
          ></SingleCart>
        ))}
      </div>
      <div className="cart-summary bg-slate-400 text-slate-800">
        <img src="../../../public/images/lat pulldown.jpg" alt="" />
        <div className="my-info shadow-lg bg-slate-300 rounded-lg text-center">
          <div>
            <p>
              70 <span>kg</span>
            </p>
            <p>Weight</p>
          </div>
          <div>
            <p>5.9</p>
            <p>Height</p>
          </div>
          <div>
            <p>
              24<span>yrs</span>
            </p>
            <p>Age</p>
          </div>
        </div>
        <h1 className="ml-7 mt-12 text-xl text-slate-800">Add a break</h1>
        <div className="shadow-lg mx-6 mt-2 py-2 bg-slate-300 rounded-lg text-center">
          <div className="time">
            <button
              onClick={() => breakTime(10)}
              className="rounded-full bg-slate-100 active:bg-green-400 p-1"
            >
              10s
            </button>
            <button
              onClick={() => breakTime(20)}
              className="rounded-full bg-slate-100 active:bg-green-400 p-1"
            >
              20s
            </button>
            <button
              onClick={() => breakTime(30)}
              className="rounded-full bg-slate-100 active:bg-green-400 p-1"
            >
              30s
            </button>
            <button
              onClick={() => breakTime(40)}
              className="rounded-full bg-slate-100 active:bg-green-400 p-1"
            >
              40s
            </button>
            <button
              onClick={() => breakTime(50)}
              className="rounded-full bg-slate-100 active:bg-green-400 p-1"
            >
              50s
            </button>
          </div>
        </div>
        <h1 className="ml-7 mt-12 text-xl">Exercise Details</h1>
        <div>
          <div className="flex justify-between px-8 shadow-lg mx-6 mt-2 py-4 bg-slate-300 rounded-lg">
            <p>Exercise time</p>
            <p className="text-gray-500">{time} second</p>
          </div>
          <div className="flex justify-between px-8 shadow-lg mx-6 mt-6 py-4 bg-slate-300 rounded-lg">
            <p>Break time</p>
            <p className="text-gray-500">{time2} second</p>
          </div>
          <div className=" hover:bg-green-400 rounded px-6 shadow-lg mx-6 mt-6 py-2 bg-orange-200 text-center">
            <button onClick={() => diffToast()}>Activity Completed</button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
