import React, { useState } from "react";
import Selector from "./Selector";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const infoBuy = [
  "Guaranteed Delivery",
  "High Quality Google",
  "100% Safe & Private",
  "24/7 Support",
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
    setLoading(true);
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
          <p className="mb-5 text-start">{item}</p>
        ))}
      </div>
      <p className="bottom-16 font-bold absolute">25% OFF NOW</p>
      <button
        disabled={loading}
        onClick={redirectToCheckout}
        className="absolute w-3/4 h-[45px] bg-purple-400 bottom-4 rounded-lg"
      >
        <p>Buy now!</p>
      </button>
    </div>
  );
}

export default BuyBox;
