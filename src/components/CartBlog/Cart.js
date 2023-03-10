import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Cart.css";
import SingleCart from "./gymInfo/SingleCart";
import userImage from "./../../photo/Atikurrahman-removebg-preview.png";
import locationIcon from "./../../photo/location.svg"

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [time, setTime] = useState(0);
  ///****/ local storage State /****///
  const [time2, setTime2] = useState(localStorage.getItem("time") || []);


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
  // set local storage data //
  function breakTime(value) {
    localStorage.setItem("time", JSON.stringify(value));
    const local = JSON.parse(localStorage.getItem("time"));
    setTime2(parseInt(local));
  }
// toast here //
  function diffToast() {
    toast("Activity Completed!");
  }
  //toast end //
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
      <div className="cart-summary w-[260px] md:w-[284px] lg:w-[300px] ml-4 md:ml-2 lg:ml-0 bg-slate-400 text-slate-800">
        <div className="justify-evenly  ">
          <div>
            <img className="w-44  rounded-br-full  bg-slate-300 shadow-lg" src={userImage} alt="userImage" />
            </div>
          <div className=" ">
            <h1 className=" text-black hover:bg-slate-300 bg-zinc-400 shadow-lg p-2 ">Md. Atikur Rahman</h1>
          <div className="flex mt-2">
          <img className="w-8" src={locationIcon} alt="homeIcon" />
            <h2 className="text-sm mt-2 hover:text-violet-800"> Naogaon,Rajshahi, Bangladesh</h2>
          </div>
          </div>
        </div>
        <div className="my-info hover:bg-zinc-400 shadow-lg bg-slate-300 rounded-lg text-center">
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
        <br />
        <hr />
        <h1 className="ml-7 mt-12 text-xl text-slate-800">Add a break</h1>
        <div className="shadow-lg mx-6 mt-2 py-2 pr-60 md:pr-8 lg:pr-6 bg-slate-300 rounded-lg text-center">
          <div className="time px-4 lg:px-0 md:px-0">
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
