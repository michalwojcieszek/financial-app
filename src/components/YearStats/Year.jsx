import { useLoaderData } from "react-router-dom";
import YearlyStats from "./YearlyStats";

function Year() {
  const user = useLoaderData();
  const { expenses } = user;
  const { currency, income, savingsGoal } = user.userData;
  const numIncome = parseFloat(income);
  const numLimit = parseFloat(savingsGoal);

  return (
    <>
      <YearlyStats
        expenses={expenses}
        currency={currency}
        income={numIncome}
        savingsGoal={numLimit}
      />
    </>
  );
}

export default Year;
