import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Navbar";
import emailRegex from "email-regex";
import { db } from "../firebaseconfig";

function Order() {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorBuy, setErrorBuy] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorBuy(false);
    }, 2000);
  }, [errorBuy]);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <div className="flex flex-col h-full w-full items-center mt-32">
        <div className="w-3/5 h-2/3 border rounded-xl shadow-xl border-purple-400 relative flex flex-col items-center justify-center">
          <h1 className="font-bold top-32 absolute text-4xl">
            Let's Check Your Order
          </h1>
          <input
            className="w-3/5 h-12 p-3 border-2 border-slate-400  rounded-lg"
            placeholder="john@example.com"
            onChange={(text) => setEmail(text.target.value)}
          />
          <button
            disabled={loading}
            onClick={() => {
              if (emailRegex({ exact: true }).test(email)) {
                db()
                  .collection("Users")
                  .where(email, "==", "email")
                  .get()
                  .then((q) =>
                    q.forEach((d) => {
                      const data = d.data();
                      data.email === email
                        ? setEmailExists(true)
                        : setEmailExists(false);
                    })
                  );
              } else {
                
              }
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
              {loading ? "Loading..." : "Check order"}
            </p>
          </button>
          {errorBuy ? (
            <>
              <p className="absolute bottom-32 left-0 right-0 mx-auto text-center text-red-400 font-bold animate-bounce animate-fade-out">
                Please introduce correctly the email and url
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        <h2 className="font-bold mt-5 text-lg">
          Contact Us: alex28042@gmail.com
        </h2>
      </div>
    </div>
  );
}

export default Order;
