import Home from "./pages/Home";
import "@stripe/stripe-js";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/checkout/:id" Component={Checkout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
