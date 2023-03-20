import React, { useState } from "react";
import Header from "../components/Navbar";
import  CheckoutImage  from "../assets/CheckoutImage.png"

function Checkout() {
  const [companyUrl, setCompanyUrl] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <div className="flex flex-col h-full w-full items-center mt-32">
        <div className="w-3/5 h-2/3 border rounded-xl shadow-xl border-purple-400 relative flex flex-col items-center justify-center">
          <h1 className="font-bold top-32 absolute text-4xl">Let's Get Started</h1>
          <input className="w-3/5 h-12 p-3 border-2 border-slate-400  rounded-lg" placeholder="john@example.com"/>
          <input className="w-3/5 h-12 p-3 mt-5 border-2 border-slate-400  rounded-lg" placeholder="https://www.google.com/maps/place/Acrobatic+Adventure+Park/@43.2712256,6.5420162,14z/data=!4m6!3m5!1s0x12cec999ef969e93:0xc5f6a42ebee3051b!8m2!3d43.2712254!4d6.5524271!16s%2Fg%2F11g1ls4x2_" />
          <button className="w-3/5 h-16 font-bold  bg-purple-400 rounded-xl absolute bottom-8">
            <p>buy </p>
          </button>
        </div>
        <img src={CheckoutImage} className="mt-10"/>
      </div>
    </div>
  );
}

export default Checkout;
