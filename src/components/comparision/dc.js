import { useEffect, useRef } from "react";
import { BarChart } from "dc";
import * as d3 from "d3";
import crossfilter from "crossfilter";

const data = [
  { month: 1, price: 100 },
  { month: 2, price: 120 },
  { month: 3, price: 150 },
  { month: 4, price: 90 },
  { month: 5, price: 70 },
  { month: 6, price: 110 },
];

function renderBarChart(element) {
  var chart = new BarChart(element);

  const ndx = crossfilter(data);
  const runDimension = ndx.dimension(function (d) {
    return d.month;
  });
  const speedSumGroup = runDimension.group().reduceSum(function (d) {
    return d.price;
  });

  chart
    .width(768)
    .height(480)
    .x(d3.scaleLinear().domain([1, 6]))
    .dimension(runDimension)
    .group(speedSumGroup);
  chart.render();
}

export default function DCDemo() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef?.current) {
      renderBarChart(chartRef.current);
    }
  }, [chartRef]);
  return <div ref={chartRef}>dc</div>;
}
