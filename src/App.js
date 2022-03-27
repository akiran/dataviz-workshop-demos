import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import D3Demo from "./components/comparision/d3";
import DCDemo from "./components/comparision/dc";
import NivoDemo from "./components/comparision/nivo";
import EChartsDemo from "./components/comparision/echarts";
import AntvDemo from "./components/comparision/antv";
import StocksDemo from "./components/demos/stocks";
import CryptoDemo from "./components/demos/crypto";

function App() {
  return (
    <div className="text-3xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d3" element={<D3Demo />} />
        <Route path="/dc" element={<DCDemo />} />
        <Route path="/nivo" element={<NivoDemo />} />
        <Route path="/echarts" element={<EChartsDemo />} />
        <Route path="/antv" element={<AntvDemo />} />

        <Route path="/stocks" element={<StocksDemo />} />
        <Route path="/crypto" element={<CryptoDemo />} />
      </Routes>
    </div>
  );
}

export default App;
