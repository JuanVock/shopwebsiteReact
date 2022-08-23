import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import "./style.css";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Counter />
      </BrowserRouter>
    </div>
  );
}

export default App;
