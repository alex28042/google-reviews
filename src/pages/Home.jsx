import React from "react";
import BenefitsBuy from "../components/Home/BenefitsBuy";
import BuyBox from "../components/Home/BuyBox";
import { loadStripe } from "@stripe/stripe-js";

function Home() {
  return (
    <div>
        <h1 className="font-bold text-5xl text-center mb-3">
          Buy Google Reviews with
        </h1>
        <h1 className="font-bold text-5xl text-center mb-3 text-purple-400">Fast Delivery</h1>
        <h2 className="text-center font-semibold text-gray-500 mb-24 text-xl">We offer only the highest quality services. Buy safely and securely below:</h2>
      <div className="flex flex-row">
        <BuyBox />
        <BenefitsBuy />
      </div>
    </div>
  );
}

export default Home;
