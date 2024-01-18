function MonthlyExpensesChart({ expensesThisMonth }) {
  console.log(expensesThisMonth);

  const categoryCost = expensesThisMonth.reduce((acc, expense) => {
    const { category, cost } = expense;
    acc[category] = (acc[category] || 0) + Number(cost);
    return acc;
  }, {});

  console.log(categoryCost);

  return <div></div>;
}

export default MonthlyExpensesChart;
