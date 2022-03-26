import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function renderBarChart(element) {
  var myChart = echarts.init(element, null, { width: 600, height: 400 });
  const option = {
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  };
  myChart.setOption(option);
}

export default function EChartsDemo() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef?.current) {
      renderBarChart(chartRef.current);
    }
  }, [chartRef]);
  return <div ref={chartRef}></div>;
}
