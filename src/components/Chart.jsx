import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import StyledChartContainerDiv from "../ui/StyledChartContainerDiv";
import H3 from "../ui/H3";

const colors = [
  "#ff7f00",
  "#6a3d9a",
  "#cab2d6",
  "#6b4226",
  "#fdbf6f",
  "#fb9a99",
  "#9edae5",
  "#1f78b4",
  "#8c564b",
  "#c49c94",
  "#b2df8a",
  "#969696",
  "#bdbdbd",
  "#a6cee3",
  "#d9d9d9",
  "#636363",
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
];

function Chart({ categoryCost }) {
  const categoryCostToChart = Object.entries(categoryCost).map((arr) => {
    const [name, value] = arr;
    return { name, value };
  });
  return (
    <>
      <H3>Expenses summary</H3>
      <StyledChartContainerDiv>
        <PieChart width={400} height={300}>
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
          >
            {categoryCostToChart.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            width="20%"
            verticalAlign="middle"
            align="right"
            iconSize={5}
            layout="vertical"
            iconType="circle"
            wrapperStyle={{ fontSize: "12px" }}
          />
        </PieChart>
      </StyledChartContainerDiv>
    </>
  );
}

export default Chart;
