import Chart from "../Chart";

function YearlyExpensesChart({ expenses }) {
  const expensesThisYear = Object.values(expenses).flat();
  console.log(expensesThisYear);

  const categoryCost = expensesThisYear.reduce((acc, expense) => {
    const { category, cost } = expense;
    acc[category] = (acc[category] || 0) + Number(cost);
    return acc;
  }, {});

  return <Chart categoryCost={categoryCost} />;
}

export default YearlyExpensesChart;
