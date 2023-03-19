import React, { useState } from "react";

function Checkout() {
  const [companyUrl, setCompanyUrl] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="w-3/4 h-2/3 border rounded-xl shadow-lg border-purple-400 flex flex-col items-center justify-center">
        <h1>Let's Get Started</h1>
        <input className="w-3/4 h-10 border" />
        <input className="w-3/4 h-10 border" />
        <button className="w-3/4 h-10 bg-slate-500">
          <p>buy </p>
        </button>
      </div>
    </div>
  );
}

export default Checkout;
