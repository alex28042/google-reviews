import Header from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <Home />
    </div>
  );
}

export default App;
