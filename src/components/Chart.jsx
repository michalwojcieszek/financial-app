import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import ChartContainerDiv from "../ui/styledComponents/ChartContainerDiv";
import H3 from "../ui/styledComponents/H3";

const colors = [
  "#a5d8ff",
  "#4dabf7",
  "#228be6",
  "#1971c2",
  "#9edae5",
  "#dee2e6",
  "#868e96",
  "#343a40",
  "#99e9f2",
  "#3bc9db",
  "#22b8cf",
  "#0c8599",
  "#d9d9d9",
  "#6a3d9a",
  "#91a7ff",
  "#4c6ef5",
  "#3b5bdb",
  "#9775fa",
  "#7950f2",
  "#5f3dc4",
  "#f3d9fa",
  "#be4bdb",
  "#862e9c",
];
// const roundedValue = parseFloat(value.toFixed(2));

function Chart({ categoryCost }) {
  const categoryCostToChart = Object.entries(categoryCost).map((arr) => {
    const [name, value] = arr;
    return { name, value: parseFloat(value.toFixed(2)) };
  });
  return (
    <>
      <H3>Expenses summary</H3>
      <ChartContainerDiv>
        <PieChart width={400} height={350}>
          <Pie
            data={categoryCostToChart}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={
              Object.entries(categoryCostToChart).length <= 1 ? 0 : 3
            }
            label
            labelLine={true}
            offset={5}
          >
            {categoryCostToChart.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => parseFloat(value).toFixed(2)}
          />
          <Legend
            width="100%"
            iconSize={5}
            layout="horizontal"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ fontSize: "1.5rem", top: "0rem" }}
            align="center"
          />
        </PieChart>
      </ChartContainerDiv>
    </>
  );
}

export default Chart;
