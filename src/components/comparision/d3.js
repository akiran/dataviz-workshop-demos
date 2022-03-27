import { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  {
    Country: "United States",
    Value: 12394,
  },
  {
    Country: "Russia",
    Value: 6148,
  },
  {
    Country: "Germany (FRG)",
    Value: 1653,
  },
  {
    Country: "France",
    Value: 2162,
  },
  {
    Country: "United Kingdom",
    Value: 1214,
  },
  {
    Country: "China",
    Value: 1131,
  },
  {
    Country: "Spain",
    Value: 814,
  },
  {
    Country: "Netherlands",
    Value: 1167,
  },
  {
    Country: "Italy",
    Value: 660,
  },
  {
    Country: "Israel",
    Value: 1263,
  },
];

function renderBarChart(element) {
  const margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // X axis
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((d) => d.Country))
    .padding(0.2);

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // Bars
  svg
    .selectAll("mybar")
    .data(data)
    .join("rect")
    .attr("x", (d) => x(d.Country))
    .attr("y", (d) => y(d.Value))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.Value))
    .attr("fill", "#69b3a2");
}

export default function D3Demo() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef?.current) {
      renderBarChart(chartRef.current);
    }
  }, [chartRef]);
  return <div ref={chartRef}></div>;
}
