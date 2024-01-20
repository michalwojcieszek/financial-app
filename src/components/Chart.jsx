import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import StyledChartContainerDiv from "../ui/StyledChartContainerDiv";
import H3 from "../ui/H3";

const colors = [
  "#ff7f00",
  "#1f78b4",
  "#fdbf6f",
  "#cab2d6",
  "#fb9a99",
  "#9edae5",
  "#8c564b",
  "#c49c94",
  "#b2df8a",
  "#969696",
  "#bdbdbd",
  "#6b4226",
  "#a6cee3",
  "#d9d9d9",
  "#6a3d9a",
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
    // const valueFixed = value.toFixed(2);
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
            dot={false}
            label
            offset={10}
          >
            {categoryCostToChart.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            width="100%"
            iconSize={5}
            layout="horizontal"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ fontSize: "15px" }}
            align="center"
          />
        </PieChart>
      </StyledChartContainerDiv>
    </>
  );
}

export default Chart;
