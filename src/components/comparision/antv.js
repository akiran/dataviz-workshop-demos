import { Column } from "@ant-design/plots";

const data = [
  { month: "Jan", price: 100 },
  { month: "Feb", price: 120 },
  { month: "Mar", price: 150 },
  { month: "Apr", price: 90 },
  { month: "May", price: 70 },
  { month: "Jun", price: 110 },
];

export default function Demo() {
  return <Column data={data} xField="month" yField="price" />;
}
