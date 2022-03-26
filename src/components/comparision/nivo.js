import { Bar } from "@nivo/bar";

const data = [
  { month: "Jan", price: 100 },
  { month: "Feb", price: 120 },
  { month: "Mar", price: 150 },
  { month: "Apr", price: 90 },
  { month: "May", price: 70 },
  { month: "Jun", price: 110 },
];

export default function NivoDemo() {
  return (
    <div className="p-12">
      <Bar
        data={data}
        keys={["price"]}
        indexBy="month"
        width={500}
        height={500}
      />
    </div>
  );
}
