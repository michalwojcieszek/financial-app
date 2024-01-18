import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import H3 from "../../ui/H3";
import styled from "styled-components";
import StyledChartContainerDiv from "../../ui/StyledChartContainerDiv";

function YearlyExpensesChart({ expenses }) {
  const expensesThisYear = Object.values(expenses).flat();
  console.log(expensesThisYear);

  const categoryCost = expensesThisYear.reduce((acc, expense) => {
    const { category, cost } = expense;
    acc[category] = (acc[category] || 0) + Number(cost);
    return acc;
  }, {});

  const categoryCostToChart = Object.entries(categoryCost).map((arr) => {
    const [name, value] = arr;
    return { name, value };
  });
  console.log(categoryCostToChart);

  const colors = [
    "#1f78b4",
    "#b2df8a",
    "#ff7f00",
    "#fdbf6f",
    "#6a3d9a",
    "#cab2d6",
    "#6b4226",
    "#fb9a99",
    "#8c564b",
    "#c49c94",
    "#9edae5",
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
            paddingAngle={3}
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

export default YearlyExpensesChart;
