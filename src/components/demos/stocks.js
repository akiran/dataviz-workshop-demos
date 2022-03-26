// import { Line } from "@ant-design/charts";
import { Line } from "@ant-design/plots";
import metaStockData from "../../data/meta-stock.json";

export default function Stocks() {
  const config = {
    data: metaStockData,
    height: 400,
    xField: "date",
    yField: "price",
    // point: {
    //   size: 5,
    //   shape: "diamond",
    // },
  };
  return <Line {...config} />;
}
