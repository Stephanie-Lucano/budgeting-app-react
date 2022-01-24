import { Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
