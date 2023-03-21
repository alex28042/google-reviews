import React, { useState } from "react";
import Selector from "./Selector";
import { loadStripe } from "@stripe/stripe-js";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { db } from "../../firebaseconfig";
import { Link } from "react-router-dom";

let stripePromise;

const infoBuy = [
  {
    name: "Guaranteed Delivery",
    component: <FiShield size={20} color={"#A020F0"} />,
  },
  {
    name: "High Quality Google",
    component: <FiThumbsUp size={20} color={"#A020F0"} />,
  },
  {
    name: "100% Safe & Private",
    component: <FiUser size={20} color={"#A020F0"} />,
  },
  {
    name: "24/7 Support",
    component: <FiLock size={20} color={"#A020F0"} />,
  },
];

const items = [
  {
    price: "price_1Mm45pKEbbYpdkJ1io1yZ5tT",
    quantity: 1,
  },
  {
    price: "price_1MmR4EKEbbYpdkJ1dMQyEKhj",
    quantity: 1,
  },
  {
    price: "price_1MmR4dKEbbYpdkJ177QDrgsJ",
    quantity: 1,
  },
  {
    price: "price_1MmR56KEbbYpdkJ1aZBfCFKX",
    quantity: 1,
  },
  {
    price: "price_1MmR5dKEbbYpdkJ1rkt0FoCS",
    quantity: 1,
  },
];

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

function BuyBox() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const [loading, setLoading] = useState(false);
  const [selcectedItem, setSelcectedItem] = useState(0);

  const item = items[selcectedItem - 1];

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}`,
    cancelUrl: `${window.location.origin}`,
  };

  const redirectToCheckout = async () => {
    console.log("redirect");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    setLoading(false);
    console.log(error);
  };

  return (
    <div className="h-[500px] w-[380px] border-2 bg-white rounded-lg shadow-md flex flex-col items-center justify-center relative">
      <Selector selectedItem={setSelcectedItem} />
      <div className="w-full ml-24">
        {infoBuy.map((item, i) => (
          <div className="flex flex-row mb-5 items-center">
            {item.component}
            <p className=" ml-3">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="bottom-16 font-bold absolute">25% OFF NOW</p>

      <Link 
        to={`/checkout/${selcectedItem}`}
        disabled={loading}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className={`absolute border w-3/4 h-[45px] bottom-4 rounded-lg overflow-hidden ${
          clicked ? "border-purple-600" : ""
        }`}
        style={{
          background: `linear-gradient(to bottom right, ${
            hovered ? "#6b46c1, #805ad5" : "#9f7aea, #7158e2"
          })`,
          transform: `scale(${hovered ? 1.05 : 1})`,
          transition: "transform 0.3s, background 0.3s",
          transitionTimingFunction: "ease-in-out",
          transitionDuration: "300ms",
        }}
      >
        <p className="absolute inset-0 flex items-center justify-center font-bold text-white">
          {loading ? "Loading..." : "Buy now!"}
        </p>
      </Link>
    </div>
  );
}

export default BuyBox;
