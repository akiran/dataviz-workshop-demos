import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul className="my-8 mx-4">
        <li>
          <Link to="/d3">D3</Link>
        </li>
        <li>
          <Link to="/dc">DC</Link>
        </li>
        <li>
          <Link to="/nivo">Nivo</Link>
        </li>
        <li>
          <Link to="/echarts">Echarts</Link>
        </li>
        <li>
          <Link to="/antv">Antv</Link>
        </li>
      </ul>
    </div>
  );
}
