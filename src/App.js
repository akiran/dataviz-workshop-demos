import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import D3Demo from "./components/comparision/d3";
import DCDemo from "./components/comparision/dc";
import NivoDemo from "./components/comparision/nivo";
import EChartsDemo from "./components/comparision/echarts";
import AntvDemo from "./components/comparision/antv";
import C3Demo from "./components/comparision/c3";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d3" element={<D3Demo />} />
        <Route path="/dc" element={<DCDemo />} />
        <Route path="/nivo" element={<NivoDemo />} />
        <Route path="/echarts" element={<EChartsDemo />} />
        <Route path="/antv" element={<AntvDemo />} />
        <Route path="/c3" element={<C3Demo />} />
      </Routes>
    </div>
  );
}

export default App;
