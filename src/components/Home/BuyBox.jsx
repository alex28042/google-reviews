import React from "react";
import Selector from "./Selector";

function BuyBox() {

  return (
    <div className="h-[500px] w-[380px] border-2 bg-white rounded-lg shadow-md flex flex-col items-center justify-center relative">
      <Selector />
      <button className="absolute w-2/3 h-[30px] bg-green-100 bottom-4 rounded-lg">
        <p>Buy now!</p>
      </button>
    </div>
  );
}

export default BuyBox;
