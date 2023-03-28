import Home from "./pages/Home";
import "@stripe/stripe-js";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import PolicyTerms from "./pages/PolicyTerms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/checkout/:id" Component={Checkout} />
        <Route path="/checkorder" Component={Order} />
        <Route path="/privacy" Component={PolicyTerms} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
