import React from "react";
import Selector from "./Selector";

function BuyBox() {
  return (
    <div className="h-[400px] w-[300px] border-2 bg-white rounded-lg shadow-md flex flex-wrap items-center justify-center relative">
      BuyBox
      <button className="absolute w-2/3 h-[30px] bg-green-100 bottom-4 rounded-lg">
        <p>Buy now!</p>
      </button>
    </div>
  );
}

export default BuyBox;
