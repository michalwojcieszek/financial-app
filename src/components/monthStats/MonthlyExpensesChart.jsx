import Chart from "../Chart";

function MonthlyExpensesChart({ expensesThisMonth }) {
  const categoryCost = expensesThisMonth.reduce((acc, expense) => {
    const { category, cost } = expense;
    acc[category] = (acc[category] || 0) + Number(cost);
    return acc;
  }, {});

  return <Chart categoryCost={categoryCost} />;
}

export default MonthlyExpensesChart;
