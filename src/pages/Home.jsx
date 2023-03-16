import React from "react";
import BenefitsBuy from "../components/Home/BenefitsBuy";
import BuyBox from "../components/Home/BuyBox";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

function Home() {
  const item = {
    price: "price_1Mm45pKEbbYpdkJ1io1yZ5tT",
    quantity: 1,
  };

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

    console.log(error);
  };
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-32">
        Buy Google Reviews
      </h1>
      <div className="flex flex-row">
        <BuyBox />
        <BenefitsBuy />
        <button
          className="bg-black w-20 h-20"
          onClick={redirectToCheckout}
        ></button>
      </div>
    </div>
  );
}

export default Home;
