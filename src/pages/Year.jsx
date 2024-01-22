import { useLoaderData } from "react-router-dom";
import YearlyStats from "../components/YearStats/YearlyStats";
import Selection from "../components/Selection";

function Year() {
  const user = useLoaderData();
  const { expenses } = user;
  const { currency, income, savingsGoal } = user.userData;
  const numIncome = parseFloat(income);
  const numLimit = parseFloat(savingsGoal);

  return (
    <>
      <Selection />
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
