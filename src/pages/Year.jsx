import { useLoaderData } from "react-router-dom";
import YearlyStats from "../components/YearStats/YearlyStats";

function Year() {
  const user = useLoaderData();
  const { expenses } = user;
  const { currency, income, limit } = user.userData;
  const numIncome = parseFloat(income);
  const numLimit = parseFloat(limit);

  return (
    <YearlyStats
      expenses={expenses}
      currency={currency}
      income={numIncome}
      limit={numLimit}
    />
  );
}

export default Year;
