import React, { useLayoutEffect, useState } from "react";
import Header from "../components/Navbar";
import CheckoutImage from "../assets/CheckoutImage.png";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "../firebaseconfig";
import { useParams } from "react-router-dom";

let stripePromise;

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

function Checkout() {
  const [companyUrl, setCompanyUrl] = useState("");
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selcectedItem, setSelcectedItem] = useState(1);
  const { id } = useParams();

  useLayoutEffect(() => {
    if (id <= items.length && id >= 1) {
      setSelcectedItem(id);
    } 
  }, []);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(true);
  };

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
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <div className="flex flex-col h-full w-full items-center mt-32">
        <div className="w-3/5 h-2/3 border rounded-xl shadow-xl border-purple-400 relative flex flex-col items-center justify-center">
          <h1 className="font-bold top-32 absolute text-4xl">
            Let's Get Started
          </h1>
          <input
            className="w-3/5 h-12 p-3 border-2 border-slate-400  rounded-lg"
            placeholder="john@example.com"
          />
          <input
            className="w-3/5 h-12 p-3 mt-5 border-2 border-slate-400  rounded-lg"
            placeholder="https://www.google.com/maps/place/Acrobatic+Adventure+Park/@43.2712256,6.5420162,14z/data=!4m6!3m5!1s0x12cec999ef969e93:0xc5f6a42ebee3051b!8m2!3d43.2712254!4d6.5524271!16s%2Fg%2F11g1ls4x2_"
          />
          <button
            disabled={loading}
            onClick={async () => {
              setLoading(true);

              await db()
                .collection("Users")
                .add({
                  email: "xxxxx",
                  companyURL: "xxxxx",
                })
                .then(() => console.log("holaa"))
                .catch(() => console.log("xxx"));

              redirectToCheckout();
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            className={`absolute border w-3/5 h-[65px] bottom-10 rounded-lg overflow-hidden ${
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
          </button>
        </div>
        <img src={CheckoutImage} className="mt-10" />
      </div>
    </div>
  );
}

export default Checkout;
