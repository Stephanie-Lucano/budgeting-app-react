import { Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Show from "./Pages/Show"
import FourOFour from "./Pages/FourOFour"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
