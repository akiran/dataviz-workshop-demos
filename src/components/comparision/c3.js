import { useEffect, useRef } from "react";
import * as c3 from "c3";

export default function DCDemo() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef?.current) {
      var chart = c3.generate({
        bindto: chartRef.current,
        data: {
          columns: [["data1", 30, 200, 100, 400, 150, 250]],
          types: {
            data1: "bar",
          },
        },
      });
    }
  }, [chartRef]);
  return <div ref={chartRef}>dc</div>;
}
